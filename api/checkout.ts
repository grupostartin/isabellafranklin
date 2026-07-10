import type { VercelRequest, VercelResponse } from '@vercel/node'
import { randomUUID } from 'crypto'
import { parseRequestContext, sendMetaCAPI, sendGA4Event } from './_lib/tracking'

const CHECKOUT_URL = process.env.CHECKOUT_URL || 'https://pay.kiwify.com.br/fpFPUmF'
const EXTERNAL_ID_PARAM = process.env.CHECKOUT_EXTERNAL_ID_PARAM || 'custom_id'

const DEFAULT_PRODUCT_ID = process.env.VITE_DEFAULT_PRODUCT_ID || 'desafio-mulher-posicionada'
const DEFAULT_PRODUCT_NAME = process.env.VITE_DEFAULT_PRODUCT_NAME || 'Desafio da Mulher Posicionada'
const DEFAULT_PRODUCT_PRICE = Number(process.env.VITE_DEFAULT_PRODUCT_PRICE || 57)
const DEFAULT_CURRENCY = process.env.VITE_DEFAULT_CURRENCY || 'BRL'

function appendParam(url: string, key: string, value: string): string {
  const sep = url.includes('?') ? '&' : '?'
  return `${url}${sep}${key}=${encodeURIComponent(value)}`
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, error: 'Metodo nao permitido' })
    return
  }

  const body = (req.body || {}) as Record<string, unknown>

  const context = parseRequestContext({
    headers: req.headers as Record<string, string | string[] | undefined>,
    url: req.url,
  })

  const eventId = typeof body.event_id === 'string' ? body.event_id : randomUUID()
  const value = typeof body.value === 'number' ? body.value : DEFAULT_PRODUCT_PRICE
  const currency = typeof body.currency === 'string' ? body.currency : DEFAULT_CURRENCY
  const productId = typeof body.product_id === 'string' ? body.product_id : DEFAULT_PRODUCT_ID
  const productName = typeof body.product_name === 'string' ? body.product_name : DEFAULT_PRODUCT_NAME
  const testEventCode = typeof body.test_event_code === 'string' ? body.test_event_code : undefined

  const userExtras = {
    email: typeof body.email === 'string' ? body.email : undefined,
    phone: typeof body.phone === 'string' ? body.phone : undefined,
    firstName: typeof body.name === 'string' ? body.name : undefined,
  }

  await Promise.allSettled([
    sendMetaCAPI({
      eventName: 'InitiateCheckout',
      eventId,
      context,
      userExtras,
      customData: {
        value,
        currency,
        content_name: productName,
        content_ids: [productId],
        content_type: 'product',
        contents: [{ id: productId, quantity: 1, item_price: value }],
        num_items: 1,
      },
      testEventCode,
    }),
    sendGA4Event({
      eventName: 'begin_checkout',
      gaCookie: context.gaCookie,
      ip: context.ip,
      userAgent: context.userAgent,
      params: {
        currency,
        value,
        items: [{ item_id: productId, item_name: productName, price: value, quantity: 1 }],
      },
    }),
  ])

  // Monta URL Kiwify com UTMs + external_id
  let url = CHECKOUT_URL
  const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'] as const
  utmKeys.forEach((k) => {
    const v = body[k]
    if (typeof v === 'string' && v) url = appendParam(url, k, v)
  })

  // src composto para Kiwify
  const utmSource = typeof body.utm_source === 'string' ? body.utm_source : ''
  if (utmSource) {
    let src = utmSource
    if (typeof body.utm_medium === 'string' && body.utm_medium) src += `_${body.utm_medium}`
    if (typeof body.utm_campaign === 'string' && body.utm_campaign) src += `_${body.utm_campaign}`
    url = appendParam(url, 'src', src)
  }

  if (typeof body.fbclid === 'string' && body.fbclid) {
    url = appendParam(url, 'fbclid', body.fbclid)
  }

  // Injeta external_id (custom_id no Kiwify) para bind do Purchase
  url = appendParam(url, EXTERNAL_ID_PARAM, context.externalId)

  res.status(200).json({
    ok: true,
    url,
    event_id: eventId,
    external_id: context.externalId,
  })
}
