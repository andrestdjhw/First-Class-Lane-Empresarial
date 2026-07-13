import React, { useState, useEffect, useRef, useCallback } from "react"
import emailjs from "@emailjs/browser"
import { getInitialLang } from "./i18n"
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY,
  RECAPTCHA_SITE_KEY,
  isPlaceholder,
} from "./config"

const EMAILJS_READY =
  !isPlaceholder(EMAILJS_SERVICE_ID) &&
  !isPlaceholder(EMAILJS_TEMPLATE_ID) &&
  !isPlaceholder(EMAILJS_PUBLIC_KEY)
const RECAPTCHA_READY = !isPlaceholder(RECAPTCHA_SITE_KEY)

const STR = {
  es: {
    title: "Agenda tu diagnóstico gratuito",
    sub: "Déjanos tus datos y te contactamos para coordinar tu diagnóstico de cultura de 20 minutos.",
    name: "Nombre",
    company: "Empresa",
    role: "Cargo",
    size: "Número de empleados",
    sizePlaceholder: "Selecciona…",
    phone: "Teléfono",
    email: "Correo",
    message: "¿Cuál es tu principal reto con el equipo?",
    optional: "(opcional)",
    submit: "Enviar solicitud",
    sending: "Enviando…",
    successTitle: "¡Gracias!",
    successBody:
      "Recibimos tus datos. Te contactaremos muy pronto para agendar tu diagnóstico.",
    error:
      "Ocurrió un problema al enviar. Inténtalo de nuevo o escríbenos a info@fclempresarial.com.",
    required: "Este campo es obligatorio.",
    invalidEmail: "Ingresa un correo válido.",
    close: "Cerrar",
    rc_pre: "Protegido por reCAPTCHA. Aplican la ",
    rc_privacy: "Política de privacidad",
    rc_and: " y los ",
    rc_terms: "Términos",
    rc_post: " de Google.",
  },
  en: {
    title: "Book your free diagnostic",
    sub: "Leave your details and we'll reach out to schedule your 20-minute culture diagnostic.",
    name: "Name",
    company: "Company",
    role: "Role",
    size: "Number of employees",
    sizePlaceholder: "Select…",
    phone: "Phone",
    email: "Email",
    message: "What's your main challenge with your team?",
    optional: "(optional)",
    submit: "Send request",
    sending: "Sending…",
    successTitle: "Thank you!",
    successBody:
      "We've received your details. We'll be in touch shortly to schedule your diagnostic.",
    error:
      "Something went wrong. Please try again or email us at info@fclempresarial.com.",
    required: "This field is required.",
    invalidEmail: "Please enter a valid email.",
    close: "Close",
    rc_pre: "Protected by reCAPTCHA. The Google ",
    rc_privacy: "Privacy Policy",
    rc_and: " and ",
    rc_terms: "Terms of Service",
    rc_post: " apply.",
  },
}

const SIZE_OPTIONS = ["1–10", "10–30", "30–75", "75+"]
const EMPTY = { name: "", company: "", role: "", size: "", phone: "", email: "", message: "" }

// ── reCAPTCHA v3 helpers ──────────────────────────────────────
function loadRecaptcha() {
  return new Promise((resolve) => {
    if (window.grecaptcha && window.grecaptcha.execute) return resolve(true)
    if (document.getElementById("fcl-recaptcha")) {
      const check = setInterval(() => {
        if (window.grecaptcha && window.grecaptcha.execute) {
          clearInterval(check)
          resolve(true)
        }
      }, 200)
      setTimeout(() => { clearInterval(check); resolve(false) }, 6000)
      return
    }
    const s = document.createElement("script")
    s.id = "fcl-recaptcha"
    s.src = "https://www.google.com/recaptcha/api.js?render=" + RECAPTCHA_SITE_KEY
    s.async = true
    s.defer = true
    s.onload = () => resolve(true)
    s.onerror = () => resolve(false)
    document.head.appendChild(s)
  })
}

async function getRecaptchaToken() {
  if (!RECAPTCHA_READY) return "recaptcha-disabled"
  const ok = await loadRecaptcha()
  if (!ok || !window.grecaptcha) return ""
  await new Promise((r) => window.grecaptcha.ready(r))
  return window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: "book_diagnostic" })
}

export default function ContactModal() {
  const [open, setOpen] = useState(false)
  const [lang, setLang] = useState(getInitialLang())
  const [form, setForm] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState("idle") // idle | sending | success | error
  const firstFieldRef = useRef(null)
  const t = STR[lang] || STR.es

  // Open on any "Book Diagnostic" CTA + keep language in sync with the toggle
  useEffect(() => {
    const onOpen = () => setOpen(true)
    const onLang = (e) => setLang(e.detail || getInitialLang())
    window.addEventListener("fcl:open-contact", onOpen)
    window.addEventListener("fcl:langchange", onLang)
    return () => {
      window.removeEventListener("fcl:open-contact", onOpen)
      window.removeEventListener("fcl:langchange", onLang)
    }
  }, [])

  const close = useCallback(() => {
    setOpen(false)
    // reset after the close animation
    setTimeout(() => { setStatus("idle"); setForm(EMPTY); setErrors({}) }, 250)
  }, [])

  // Body scroll lock + focus + Esc
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    const onKey = (e) => { if (e.key === "Escape") close() }
    document.addEventListener("keydown", onKey)
    const id = setTimeout(() => firstFieldRef.current && firstFieldRef.current.focus(), 60)
    return () => {
      document.body.style.overflow = prev
      document.removeEventListener("keydown", onKey)
      clearTimeout(id)
    }
  }, [open, close])

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }))
    if (errors[field]) setErrors((e) => ({ ...e, [field]: null }))
  }

  function validate() {
    const e = {}
    if (!form.name.trim()) e.name = t.required
    if (!form.company.trim()) e.company = t.required
    if (!form.email.trim()) e.email = t.required
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = t.invalidEmail
    setErrors(e)
    return Object.keys(e).length === 0
  }

  async function submit(ev) {
    ev.preventDefault()
    if (status === "sending") return
    if (!validate()) return
    setStatus("sending")

    try {
      const recaptchaToken = await getRecaptchaToken()
      const params = {
        from_name: form.name,
        company: form.company,
        role: form.role,
        company_size: form.size,
        phone: form.phone,
        reply_to: form.email,
        email: form.email,
        message: form.message,
        lang: lang,
        "g-recaptcha-response": recaptchaToken,
      }

      if (EMAILJS_READY) {
        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params, {
          publicKey: EMAILJS_PUBLIC_KEY,
        })
      } else {
        // Demo mode: keys not configured yet. Log the payload and simulate success
        // so the flow can be previewed. Real sends start once config.js is filled in.
        // eslint-disable-next-line no-console
        console.warn("[FCL] EmailJS no configurado — modo demo. Payload:", params)
        await new Promise((r) => setTimeout(r, 800))
      }
      setStatus("success")
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("[FCL] Error al enviar el formulario:", err)
      setStatus("error")
    }
  }

  if (!open) return null

  return (
    <div
      className="fcl-modal-overlay"
      onMouseDown={(e) => { if (e.target === e.currentTarget) close() }}
    >
      <div className="fcl-modal" role="dialog" aria-modal="true" aria-label={t.title}>
        <button className="fcl-close" type="button" aria-label={t.close} onClick={close}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>

        {status === "success" ? (
          <div className="fcl-success">
            <span className="ok" aria-hidden="true">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7" /></svg>
            </span>
            <h2>{t.successTitle}</h2>
            <p>{t.successBody}</p>
          </div>
        ) : (
          <>
            <h2>{t.title}</h2>
            <p className="sub">{t.sub}</p>

            <form className="fcl-form" onSubmit={submit} noValidate>
              <div className="fcl-field">
                <label htmlFor="fcl-name">{t.name}</label>
                <input
                  id="fcl-name" ref={firstFieldRef} type="text" value={form.name}
                  className={errors.name ? "invalid" : ""}
                  onChange={(e) => update("name", e.target.value)}
                />
                {errors.name && <span className="err">{errors.name}</span>}
              </div>

              <div className="fcl-field">
                <label htmlFor="fcl-company">{t.company}</label>
                <input
                  id="fcl-company" type="text" value={form.company}
                  className={errors.company ? "invalid" : ""}
                  onChange={(e) => update("company", e.target.value)}
                />
                {errors.company && <span className="err">{errors.company}</span>}
              </div>

              <div className="fcl-row">
                <div className="fcl-field">
                  <label htmlFor="fcl-role">{t.role} <span className="opt">{t.optional}</span></label>
                  <input id="fcl-role" type="text" value={form.role}
                    onChange={(e) => update("role", e.target.value)} />
                </div>
                <div className="fcl-field">
                  <label htmlFor="fcl-size">{t.size}</label>
                  <select id="fcl-size" value={form.size} onChange={(e) => update("size", e.target.value)}>
                    <option value="">{t.sizePlaceholder}</option>
                    {SIZE_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
              </div>

              <div className="fcl-row">
                <div className="fcl-field">
                  <label htmlFor="fcl-email">{t.email}</label>
                  <input
                    id="fcl-email" type="email" value={form.email}
                    className={errors.email ? "invalid" : ""}
                    onChange={(e) => update("email", e.target.value)}
                  />
                  {errors.email && <span className="err">{errors.email}</span>}
                </div>
                <div className="fcl-field">
                  <label htmlFor="fcl-phone">{t.phone} <span className="opt">{t.optional}</span></label>
                  <input id="fcl-phone" type="tel" value={form.phone}
                    onChange={(e) => update("phone", e.target.value)} />
                </div>
              </div>

              <div className="fcl-field">
                <label htmlFor="fcl-message">{t.message} <span className="opt">{t.optional}</span></label>
                <textarea id="fcl-message" value={form.message}
                  onChange={(e) => update("message", e.target.value)} />
              </div>

              {status === "error" && <div className="fcl-alert error">{t.error}</div>}

              <button className="btn btn--olive fcl-submit" type="submit" disabled={status === "sending"}>
                {status === "sending" ? t.sending : t.submit}
              </button>

              {RECAPTCHA_READY && (
                <p className="fcl-note">
                  {t.rc_pre}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">{t.rc_privacy}</a>
                  {t.rc_and}
                  <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">{t.rc_terms}</a>
                  {t.rc_post}
                </p>
              )}
            </form>
          </>
        )}
      </div>
    </div>
  )
}