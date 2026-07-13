// ─────────────────────────────────────────────────────────────
// FCL Empresarial — integration keys
// Reemplaza estos placeholders cuando tengas el setup listo.
// Nada más se toca: el ContactModal los lee de aquí.
//
//   EmailJS  → https://dashboard.emailjs.com  (Account → API Keys / Email Services / Templates)
//   reCAPTCHA v3 → https://www.google.com/recaptcha/admin  (crea una key v3 para tu dominio)
// ─────────────────────────────────────────────────────────────

export const EMAILJS_SERVICE_ID  = "service_cl14q1k"
export const EMAILJS_TEMPLATE_ID = "template_6rgvhi7"
export const EMAILJS_PUBLIC_KEY  = "ADYifT9OY2NpqGwcF"

// reCAPTCHA v3 site key (la "clave del sitio", NO la secreta)
export const RECAPTCHA_SITE_KEY  = "6Ld8CU0tAAAAALW7FZFZITZvP0YYl2qtgVddyxTM"

// Helper: detecta si algo sigue siendo placeholder
export const isPlaceholder = (v) => !v || String(v).indexOf("YOUR_") === 0