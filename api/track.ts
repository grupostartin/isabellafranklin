import type { VercelRequest, VercelResponse } from '@vercel/node'
import { parseRequestContext, sendMetaCAPI, sendGA4Event } from './_lib/tracking'

// Mapa Meta -> GA4
const GA4_EVENT_MAP: Record<string, string> = {
  PageView: 'page_view',
  ViewContent: 'view_item',
  Lead: 'generate_lead',
  CompleteRegistration: 'sign_up',
  Contact: 'contact',
  InitiateCheckout: 'begin_checkout',
  AddToCart: 'add_to_cart',
  AddPaymentInfo: 'add_payment_info',
  Purchase: 'purchase',
  Search: 'search',
  Subscribe: 'subscribe',
}

// Produto padrão — Desafio da Mulher Posicionada
const DEFAULT_PRODUCT_ID = process.env.VITE_DEFAULT_PRODUCT_ID || 'desafio-mulher-posicionada'
const DEFAULT_PRODUCT_NAME = process.env.VITE_DEFAULT_PRODUCT_NAME || 'Desafio da Mulher Posicionada'
const DEFAULT_PRODUCT_PRICE = Number(process.env.VITE_DEFAULT_PRODUCT_PRICE || 57)
const DEFAULT_CURRENCY = process.env.VITE_DEFAULT_CURRENCY || 'BRL'

const FUNNEL_EVENTS = new Set([
  'ViewContent', 'AddToCart', 'AddPaymentInfo', 'InitiateCheckout', 'Purchase',
])

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, error: 'Metodo nao permitido' })
    return
  }

  const body = req.body as Record<string, unknown>
  if (!body || typeof body.event_name !== 'string' || typeof body.event_id !== 'string') {
    res.status(400).json({ ok: false, error: 'Payload invalido: event_name e event_id sao obrigatorios' })
    return
  }

  const eventName = body.event_name as string
  const eventId = body.event_id as string

  const context = parseRequestContext({ headers: req.headers as Record<string, string | string[] | undefined>, url: req.url })

  const customData: Record<string, unknown> = {}
  if (typeof body.value === 'number') customData.value = body.value
  if (typeof body.currency === 'string') customData.currency = body.currency
  if (typeof body.content_name === 'string') customData.content_name = body.content_name
  if (Array.isArray(body.content_ids)) customData.content_ids = body.content_ids
  if (typeof body.content_type === 'string') customData.content_type = body.content_type
  if (typeof body.num_items === 'number') customData.num_items = body.num_items
  if (typeof body.search_string === 'string') customData.search_string = body.search_string
  if (typeof body.order_id === 'string') customData.order_id = body.order_id

  // Defaults de produto para eventos de funil
  if (FUNNEL_EVENTS.has(eventName)) {
    if (customData.value === undefined) customData.value = DEFAULT_PRODUCT_PRICE
    if (!customData.currency) customData.currency = DEFAULT_CURRENCY
    if (!customData.content_name) customData.content_name = DEFAULT_PRODUCT_NAME
    if (!customData.content_ids) customData.content_ids = [DEFAULT_PRODUCT_ID]
    if (!customData.content_type) customData.content_type = 'product'
    if (!customData.num_items) customData.num_items = 1
  }

  const userExtras = {
    email: typeof body.email === 'string' ? body.email : undefined,
    phone: typeof body.phone === 'string' ? body.phone : undefined,
    firstName: typeof body.name === 'string' ? body.name : undefined,
    lastName: typeof body.last_name === 'string' ? body.last_name : undefined,
    city: typeof body.city === 'string' ? body.city : undefined,
    state: typeof body.state === 'string' ? body.state : undefined,
    zip: typeof body.zip === 'string' ? body.zip : undefined,
  }

  const ga4EventName = GA4_EVENT_MAP[eventName]
  const testEventCode = typeof body.test_event_code === 'string' ? body.test_event_code : undefined

  const ga4Params: Record<string, unknown> = {}
  if (customData.value !== undefined) ga4Params.value = customData.value
  if (customData.currency) ga4Params.currency = customData.currency
  if (customData.content_name) ga4Params.content_name = customData.content_name
  if (customData.order_id) ga4Params.transaction_id = customData.order_id

  await Promise.allSettled([
    sendMetaCAPI({
      eventName,
      eventId,
      context,
      userExtras,
      customData: Object.keys(customData).length > 0 ? customData as import('./_lib/tracking').CustomData : undefined,
      testEventCode,
    }),
    ga4EventName
      ? sendGA4Event({
          eventName: ga4EventName,
          gaCookie: context.gaCookie,
          ip: context.ip,
          userAgent: context.userAgent,
          params: ga4Params,
        })
      : Promise.resolve(),
  ])

  res.status(200).json({ ok: true, event_id: eventId })
}
