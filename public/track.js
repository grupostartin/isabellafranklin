/* eslint-disable */
/*
 * track.js — Isabella Franklin | Psicologia & Mentoria
 * Tracking universal: Meta Pixel + CAPI server side + GA4.
 * Produto: Desafio da Mulher Posicionada (Kiwify).
 * Referencia: TRACKING_PERFEITO_META_GADS.md v2.0
 */
;(function () {
  if (window.__trackInit) return
  window.__trackInit = true

  /* ── Produto padrão ── */
  var PRODUTO = {
    id: 'desafio-mulher-posicionada',
    name: 'Desafio da Mulher Posicionada',
    price: 57,
    currency: 'BRL',
  }

  var ONE_YEAR = 60 * 60 * 24 * 365

  /* ── Utilitários ── */
  function uuidV4() {
    if (window.crypto && typeof window.crypto.randomUUID === 'function') {
      return window.crypto.randomUUID()
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (Math.random() * 16) | 0
      var v = c === 'x' ? r : (r & 0x3) | 0x8
      return v.toString(16)
    })
  }

  function getCookie(name) {
    var m = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'))
    return m ? decodeURIComponent(m[1]) : ''
  }

  function setCookie(name, value, maxAgeSec) {
    var s = name + '=' + encodeURIComponent(value) + '; path=/; max-age=' + maxAgeSec + '; SameSite=Lax'
    if (location.protocol === 'https:') s += '; Secure'
    document.cookie = s
  }

  function getQueryParam(name) {
    try {
      return new URL(window.location.href).searchParams.get(name) || ''
    } catch (e) {
      return ''
    }
  }

  /* ── Cookie _eid (identidade estável, 1 ano) ── */
  if (!getCookie('_eid')) setCookie('_eid', uuidV4(), ONE_YEAR)

  /* ── SDK Meta via CDN — gera _fbc/_fbp com subdomainIndex correto ── */
  var sdkReady = new Promise(function (resolve) {
    var s = document.createElement('script')
    s.src = 'https://unpkg.com/meta-capi-param-builder-clientjs/dist/clientParamBuilder.bundle.js'
    s.async = true
    s.onload = function () {
      try {
        if (
          window.clientParamBuilder &&
          typeof window.clientParamBuilder.processAndCollectAllParams === 'function'
        ) {
          var p = window.clientParamBuilder.processAndCollectAllParams(window.location.href)
          if (p && typeof p.then === 'function') {
            p.then(function () { resolve(true) }).catch(function () { resolve(false) })
          } else {
            resolve(true)
          }
        } else {
          resolve(false)
        }
      } catch (e) {
        console.warn('[track] SDK Meta erro:', e)
        resolve(false)
      }
    }
    s.onerror = function () {
      /* Fallback: SDK nao carregou (adblock/offline) — melhor sem fbc/fbp do que com errado */
      console.warn('[track] SDK Meta nao carregou. fbc/fbp serao omitidos.')
      resolve(false)
    }
    document.head.appendChild(s)
  })

  /* ── Snippet base do Meta Pixel — fila ate fbq('init') via /api/track-config ── */
  ;(function (f, b, e, v, n, t, s) {
    if (f.fbq) return
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
    }
    if (!f._fbq) f._fbq = n
    n.push = n
    n.loaded = !0
    n.version = '2.0'
    n.queue = []
    t = b.createElement(e)
    t.async = !0
    t.src = v
    s = b.getElementsByTagName(e)[0]
    s.parentNode.insertBefore(t, s)
  })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js')

  /* Busca Pixel ID do servidor (nao expor no JS estático em texto claro) */
  fetch('/api/track-config', { credentials: 'same-origin' })
    .then(function (r) { return r.json() })
    .then(function (cfg) {
      if (cfg && cfg.pixelId && typeof window.fbq === 'function') {
        window.fbq('init', cfg.pixelId)
      }
    })
    .catch(function () {})

  /* ── Test Event Code (persiste em sessionStorage) ── */
  function getTestEventCode() {
    var fromUrl = getQueryParam('test_event_code')
    try {
      if (fromUrl) {
        sessionStorage.setItem('_tec', fromUrl)
        return fromUrl
      }
      return sessionStorage.getItem('_tec') || ''
    } catch (e) {
      return fromUrl || ''
    }
  }
  var TEST_EVENT_CODE = getTestEventCode()

  /* ── Envio para o servidor (/api/track) ── */
  function postCAPI(payload) {
    try {
      var body = JSON.stringify(payload)
      if (navigator.sendBeacon) {
        var blob = new Blob([body], { type: 'application/json' })
        if (navigator.sendBeacon('/api/track', blob)) return
      }
      fetch('/api/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: body,
        keepalive: true,
      }).catch(function () {})
    } catch (e) {}
  }

  /* ── Pixel client side ── */
  function fbqTrack(eventName, params, eventId) {
    if (typeof window.fbq !== 'function') return
    try {
      window.fbq('track', eventName, params || {}, { eventID: eventId })
    } catch (e) {}
  }

  /* ── trackEvent público ── */
  function trackEvent(eventName, data, opts) {
    opts = opts || {}
    var eventId = opts.eventId || uuidV4()
    var params = data || {}

    fbqTrack(eventName, params, eventId)

    var payload = { event_name: eventName, event_id: eventId }
    if (params.value !== undefined) payload.value = params.value
    if (params.currency) payload.currency = params.currency
    if (params.content_name) payload.content_name = params.content_name
    if (params.content_ids) payload.content_ids = params.content_ids
    if (params.content_type) payload.content_type = params.content_type
    if (params.num_items) payload.num_items = params.num_items
    if (params.search_string) payload.search_string = params.search_string
    if (opts.email) payload.email = opts.email
    if (opts.phone) payload.phone = opts.phone
    if (opts.name) payload.name = opts.name
    if (TEST_EVENT_CODE) payload.test_event_code = TEST_EVENT_CODE

    postCAPI(payload)
    return eventId
  }

  window.trackEvent = trackEvent
  window.__produto = PRODUTO

  /* ── Eventos automáticos (PageView + ViewContent) ── */
  function fireAutoEvents() {
    sdkReady.finally(function () {
      trackEvent('PageView', {})
      setTimeout(function () {
        trackEvent('ViewContent', {
          content_ids: [PRODUTO.id],
          content_type: 'product',
          content_name: PRODUTO.name,
          value: PRODUTO.price,
          currency: PRODUTO.currency,
        })
      }, 3000)
    })
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fireAutoEvents, { once: true })
  } else {
    fireAutoEvents()
  }

  /* ── trackInitiateCheckout ── */
  window.trackInitiateCheckout = function (extra) {
    return trackEvent(
      'InitiateCheckout',
      {
        content_ids: [PRODUTO.id],
        content_type: 'product',
        content_name: PRODUTO.name,
        num_items: 1,
        value: PRODUTO.price,
        currency: PRODUTO.currency,
      },
      extra || {},
    )
  }

  /* ── trackContact ── */
  window.trackContact = function (extra) {
    return trackEvent('Contact', {}, extra || {})
  }

  /* ── goToCheckout — chama /api/checkout e redireciona com custom_id ── */
  window.goToCheckout = function (opts) {
    opts = opts || {}
    var eventId = uuidV4()

    /* Dispara cliente lado imediatamente */
    fbqTrack('InitiateCheckout', {
      content_ids: [PRODUTO.id],
      content_type: 'product',
      content_name: PRODUTO.name,
      num_items: 1,
      value: PRODUTO.price,
      currency: PRODUTO.currency,
    }, eventId)

    /* Captura UTMs da URL atual */
    var params = new URL(window.location.href).searchParams
    var payload = {
      event_id: eventId,
      value: PRODUTO.price,
      currency: PRODUTO.currency,
      product_id: PRODUTO.id,
      product_name: PRODUTO.name,
    }
    var utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'fbclid']
    utmKeys.forEach(function (k) {
      var v = params.get(k)
      if (v) payload[k] = v
    })
    if (opts.email) payload.email = opts.email
    if (opts.phone) payload.phone = opts.phone
    if (opts.name) payload.name = opts.name
    if (TEST_EVENT_CODE) payload.test_event_code = TEST_EVENT_CODE

    /* Fallback: se o fetch demorar ou falhar, redireciona direto */
    var fallbackUrl = 'https://pay.kiwify.com.br/fpFPUmF'
    var fallbackTimer = setTimeout(function () {
      window.location.href = fallbackUrl
    }, 3500)

    fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
      .then(function (r) { return r.json() })
      .then(function (data) {
        clearTimeout(fallbackTimer)
        if (data && data.url) {
          window.location.href = data.url
        } else {
          window.location.href = fallbackUrl
        }
      })
      .catch(function () {
        clearTimeout(fallbackTimer)
        window.location.href = fallbackUrl
      })
  }

  /* ── Auto-track: cliques em data-track-event ── */
  document.addEventListener(
    'click',
    function (ev) {
      var el = ev.target && ev.target.closest && ev.target.closest('[data-track-event]')
      if (!el) return
      var name = el.getAttribute('data-track-event')
      if (!name) return
      var raw = el.getAttribute('data-track-data')
      var data = {}
      if (raw) { try { data = JSON.parse(raw) } catch (e) {} }
      trackEvent(name, data)
    },
    true,
  )

  /* ── Auto-track: cliques em links Kiwify → InitiateCheckout ── */
  document.addEventListener(
    'click',
    function (ev) {
      var a = ev.target && ev.target.closest && ev.target.closest('a[href*="kiwify.com.br"]')
      if (!a) return
      /* Se o componente React já chamou goToCheckout, não duplicar */
      if (a.dataset && a.dataset.trackedCheckout === '1') return
      if (typeof window.goToCheckout === 'function') return
      try { a.dataset.trackedCheckout = '1' } catch (e) {}
      window.trackInitiateCheckout()
    },
    true,
  )

  /* ── Auto-track: WhatsApp / mailto / tel → Contact ── */
  document.addEventListener(
    'click',
    function (ev) {
      var a = ev.target && ev.target.closest && ev.target.closest('a[href]')
      if (!a) return
      var href = a.getAttribute('href') || ''
      if (!/^(https?:\/\/(wa\.me|api\.whatsapp\.com|chat\.whatsapp\.com)|mailto:|tel:)/i.test(href)) return
      if (a.dataset && a.dataset.trackedContact === '1') return
      try { a.dataset.trackedContact = '1' } catch (e) {}
      window.trackContact()
    },
    true,
  )
})()
