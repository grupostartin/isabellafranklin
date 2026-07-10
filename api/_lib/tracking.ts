import { createHash, randomUUID } from 'crypto'

// ---------- tipos ----------

export interface ParsedRequestContext {
  ip?: string
  userAgent?: string
  fbc?: string
  fbp?: string
  externalId: string
  eventSourceUrl?: string
  city?: string
  state?: string
  zip?: string
  country: string
  gaCookie?: string
}

export interface CustomData {
  value?: number
  currency?: string
  content_ids?: string[]
  content_name?: string
  content_type?: string
  contents?: Array<{ id: string; quantity: number; item_price?: number }>
  num_items?: number
  order_id?: string
  search_string?: string
}

export interface UserDataExtras {
  email?: string
  phone?: string
  firstName?: string
  lastName?: string
  city?: string
  state?: string
  zip?: string
  country?: string
}

export interface CAPISendOptions {
  eventName: string
  eventId: string
  eventTime?: number
  context: ParsedRequestContext
  userExtras?: UserDataExtras
  customData?: CustomData
  actionSource?: string
  testEventCode?: string
}

// ---------- helpers de cookies/headers ----------

function cookieHeaderToMap(header: string): Record<string, string> {
  const map: Record<string, string> = {}
  if (!header) return map
  header.split(';').forEach((part) => {
    const idx = part.indexOf('=')
    if (idx <= 0) return
    const key = part.slice(0, idx).trim()
    const val = part.slice(idx + 1).trim()
    if (key) map[key] = decodeURIComponent(val)
  })
  return map
}

// ---------- normalização BR ----------

function ensureBrazilianPhone(raw: string): string {
  let digits = raw.replace(/\D/g, '')
  if (digits.startsWith('00')) digits = digits.slice(2)
  if ((digits.length === 12 || digits.length === 13) && digits.startsWith('55')) return `+${digits}`
  if (digits.length === 10 || digits.length === 11) return `+55${digits}`
  return digits.startsWith('+') ? digits : `+${digits}`
}

const STATE_NAME_TO_CODE: Record<string, string> = {
  acre: 'ac', alagoas: 'al', amapa: 'ap', amazonas: 'am',
  bahia: 'ba', ceara: 'ce', 'distrito federal': 'df', 'espirito santo': 'es',
  goias: 'go', maranhao: 'ma', 'mato grosso do sul': 'ms', 'mato grosso': 'mt',
  'minas gerais': 'mg', para: 'pa', paraiba: 'pb', parana: 'pr',
  pernambuco: 'pe', piaui: 'pi', 'rio de janeiro': 'rj', 'rio grande do norte': 'rn',
  'rio grande do sul': 'rs', rondonia: 'ro', roraima: 'rr', 'santa catarina': 'sc',
  'sao paulo': 'sp', sergipe: 'se', tocantins: 'to',
}

function ensureStateCode(raw: string): string {
  const s = raw.trim().toLowerCase()
  if (/^[a-z]{2}$/.test(s)) return s
  const normalized = s.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  return STATE_NAME_TO_CODE[normalized] || s
}

// ---------- hash ----------

function sha256(value: string): string {
  return createHash('sha256').update(value.trim().toLowerCase()).digest('hex')
}

function hashPhone(raw: string): string {
  const e164 = ensureBrazilianPhone(raw)
  const digits = e164.replace(/\D/g, '')
  return createHash('sha256').update(digits).digest('hex')
}

function hashState(raw: string): string {
  return sha256(ensureStateCode(raw))
}

// ---------- parse do request (Vercel Function — req é um IncomingMessage-like) ----------

export function parseRequestContext(req: {
  headers: Record<string, string | string[] | undefined>
  url?: string
}): ParsedRequestContext {
  const h = (key: string): string => {
    const v = req.headers[key.toLowerCase()]
    if (Array.isArray(v)) return v[0] ?? ''
    return v ?? ''
  }

  const cookieHeader = h('cookie')
  const cookies = cookieHeaderToMap(cookieHeader)

  const xff = h('x-forwarded-for')
  const remoteIp = h('x-real-ip')
  const ip = xff ? xff.split(',')[0].trim() : remoteIp || undefined

  const userAgent = h('user-agent') || undefined

  // fbc/fbp — lidos dos cookies (escritos pelo SDK Meta client side)
  const fbc = cookies._fbc || undefined
  const fbp = cookies._fbp || undefined

  const externalId = cookies._eid || randomUUID()

  const referer = h('referer')
  const origin = h('origin')
  const host = h('host')
  let eventSourceUrl = referer || origin || (host ? `https://${host}` : undefined)
  if (!eventSourceUrl && req.url) {
    try {
      eventSourceUrl = new URL(req.url, 'https://placeholder.com').href
    } catch { /* empty */ }
  }

  const city = h('x-vercel-ip-city') ? decodeURIComponent(h('x-vercel-ip-city')) : undefined
  const state = h('x-vercel-ip-country-region') || undefined
  const zip = h('x-vercel-ip-postal-code') || undefined
  const country = (h('x-vercel-ip-country') || 'br').toLowerCase()

  return {
    ip,
    userAgent,
    fbc,
    fbp,
    externalId,
    eventSourceUrl,
    city,
    state,
    zip,
    country,
    gaCookie: cookies._ga,
  }
}

// ---------- buildUserData ----------

export function buildUserData(
  ctx: ParsedRequestContext,
  extras?: UserDataExtras,
): Record<string, unknown> {
  const u: Record<string, unknown> = {}

  if (extras?.email) u.em = [sha256(extras.email)]
  if (extras?.phone) u.ph = [hashPhone(extras.phone)]

  if (extras?.firstName) {
    const parts = extras.firstName.trim().split(/\s+/)
    const fn = parts[0]
    const ln = parts.length > 1 ? parts.slice(1).join(' ') : undefined
    if (fn) u.fn = [sha256(fn)]
    if (ln && !extras.lastName) u.ln = [sha256(ln)]
  }
  if (extras?.lastName) u.ln = [sha256(extras.lastName)]

  const cityRaw = extras?.city ?? ctx.city
  if (cityRaw) {
    u.ct = [sha256(cityRaw.normalize('NFD').replace(/[\u0300-\u036f]/g, ''))]
  }
  const stateRaw = extras?.state ?? ctx.state
  if (stateRaw) u.st = [hashState(stateRaw)]
  const zipRaw = extras?.zip ?? ctx.zip
  if (zipRaw) u.zp = [sha256(zipRaw.replace(/\D/g, '').slice(0, 8))]

  u.country = [sha256(ctx.country.toLowerCase())]
  u.external_id = [sha256(ctx.externalId)]

  if (ctx.ip) u.client_ip_address = ctx.ip
  if (ctx.userAgent) u.client_user_agent = ctx.userAgent
  if (ctx.fbc) u.fbc = ctx.fbc
  if (ctx.fbp) u.fbp = ctx.fbp

  return u
}

// ---------- sendMetaCAPI ----------

export async function sendMetaCAPI(opts: CAPISendOptions): Promise<void> {
  const pixelId = process.env.FB_PIXEL_ID || process.env.VITE_FB_PIXEL_ID
  const accessToken = process.env.FB_ACCESS_TOKEN
  if (!pixelId || !accessToken) {
    console.warn('[CAPI] FB_PIXEL_ID ou FB_ACCESS_TOKEN ausente. Evento ignorado:', opts.eventName)
    return
  }

  try {
    const userData = buildUserData(opts.context, opts.userExtras)

    const eventBody: Record<string, unknown> = {
      event_name: opts.eventName,
      event_time: opts.eventTime ?? Math.floor(Date.now() / 1000),
      event_id: opts.eventId,
      action_source: opts.actionSource ?? 'website',
      event_source_url: opts.context.eventSourceUrl,
      user_data: userData,
    }

    if (opts.customData && Object.keys(opts.customData).length > 0) {
      eventBody.custom_data = opts.customData
    }

    const body: Record<string, unknown> = { data: [eventBody] }
    if (opts.testEventCode) body.test_event_code = opts.testEventCode

    const url = `https://graph.facebook.com/v21.0/${pixelId}/events?access_token=${accessToken}`
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })

    if (!response.ok) {
      const err = await response.text()
      console.error('[CAPI] Erro Meta:', opts.eventName, response.status, err)
      return
    }

    const result = await response.json()
    console.log('[CAPI] OK', {
      event: opts.eventName,
      event_id: opts.eventId,
      received: result.events_received,
      trace: result.fbtrace_id,
    })
  } catch (err) {
    console.error('[CAPI] Falha inesperada:', opts.eventName, err)
  }
}

// ---------- sendGA4Event ----------

export interface GA4Payload {
  eventName: string
  gaCookie?: string
  ip?: string
  userAgent?: string
  params?: Record<string, unknown>
  userId?: string
}

function extractGaClientId(gaCookie: string): string {
  const parts = gaCookie.split('.')
  if (parts.length >= 4) return `${parts[2]}.${parts[3]}`
  return gaCookie
}

function generateClientId(): string {
  return `${Math.floor(Math.random() * 2_147_483_647)}.${Math.floor(Date.now() / 1000)}`
}

export async function sendGA4Event(payload: GA4Payload): Promise<void> {
  const measurementId = process.env.GA_MEASUREMENT_ID
  const apiSecret = process.env.GA_API_SECRET
  if (!measurementId || !apiSecret) {
    console.warn('[GA4] Measurement ID ou API Secret ausente. Evento ignorado:', payload.eventName)
    return
  }

  try {
    const clientId = payload.gaCookie
      ? extractGaClientId(payload.gaCookie)
      : generateClientId()

    const body: Record<string, unknown> = {
      client_id: clientId,
      timestamp_micros: Date.now() * 1000,
      non_personalized_ads: false,
      events: [
        {
          name: payload.eventName,
          params: {
            engagement_time_msec: 100,
            session_id: String(Math.floor(Date.now() / 1000)),
            ...payload.params,
          },
        },
      ],
    }
    if (payload.userId) body.user_id = payload.userId

    const url = `https://www.google-analytics.com/mp/collect?measurement_id=${measurementId}&api_secret=${apiSecret}`
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(payload.userAgent && { 'User-Agent': payload.userAgent }),
        ...(payload.ip && { 'X-Forwarded-For': payload.ip }),
      },
      body: JSON.stringify(body),
    })

    if (response.status !== 204 && !response.ok) {
      const txt = await response.text()
      console.error('[GA4] Erro:', payload.eventName, response.status, txt)
    } else {
      console.log('[GA4] OK', { event: payload.eventName })
    }
  } catch (err) {
    console.error('[GA4] Falha inesperada:', payload.eventName, err)
  }
}
