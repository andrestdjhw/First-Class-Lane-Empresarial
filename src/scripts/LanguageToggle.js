import React, { useState, useEffect } from "react"
import { applyLang, getInitialLang } from "./i18n"

// Simplified, original SVG drawings of national flags (public symbols),
// clipped into a circle. No detailed emblems are reproduced.
function FlagMX() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <defs><clipPath id="fcl-mx"><circle cx="12" cy="12" r="11" /></clipPath></defs>
      <g clipPath="url(#fcl-mx)">
        <rect x="1" y="1" width="7.33" height="22" fill="#006847" />
        <rect x="8.33" y="1" width="7.33" height="22" fill="#ffffff" />
        <rect x="15.66" y="1" width="7.34" height="22" fill="#ce1126" />
        <circle cx="12" cy="12" r="2.1" fill="none" stroke="#8a6d3b" strokeWidth="1" />
      </g>
      <circle cx="12" cy="12" r="11" fill="none" stroke="rgba(0,0,0,.14)" />
    </svg>
  )
}

function FlagUS() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <defs><clipPath id="fcl-us"><circle cx="12" cy="12" r="11" /></clipPath></defs>
      <g clipPath="url(#fcl-us)">
        <rect x="1" y="1" width="22" height="22" fill="#ffffff" />
        <g fill="#b22234">
          <rect x="1" y="1" width="22" height="1.7" />
          <rect x="1" y="4.4" width="22" height="1.7" />
          <rect x="1" y="7.8" width="22" height="1.7" />
          <rect x="1" y="11.15" width="22" height="1.7" />
          <rect x="1" y="14.5" width="22" height="1.7" />
          <rect x="1" y="17.9" width="22" height="1.7" />
          <rect x="1" y="21.3" width="22" height="1.7" />
        </g>
        <rect x="1" y="1" width="10" height="11.9" fill="#3c3b6e" />
        <g fill="#ffffff">
          <circle cx="3.2" cy="3.2" r=".65" /><circle cx="6" cy="3.2" r=".65" /><circle cx="8.8" cy="3.2" r=".65" />
          <circle cx="4.6" cy="5.6" r=".65" /><circle cx="7.4" cy="5.6" r=".65" />
          <circle cx="3.2" cy="8" r=".65" /><circle cx="6" cy="8" r=".65" /><circle cx="8.8" cy="8" r=".65" />
          <circle cx="4.6" cy="10.3" r=".65" /><circle cx="7.4" cy="10.3" r=".65" />
        </g>
      </g>
      <circle cx="12" cy="12" r="11" fill="none" stroke="rgba(0,0,0,.14)" />
    </svg>
  )
}

const OPTIONS = [
  { code: "es", label: "ES", name: "Español", Flag: FlagMX },
  { code: "en", label: "EN", name: "English", Flag: FlagUS },
]

export default function LanguageToggle() {
  const [lang, setLang] = useState(getInitialLang())

  // Ensure the document matches the stored language on first paint.
  useEffect(() => { applyLang(lang) }, [])

  function choose(next) {
    if (next === lang) return
    setLang(next)
    applyLang(next)
  }

  return (
    <div className="lang-fab" role="group" aria-label="Idioma / Language">
      {OPTIONS.map(function (o) {
        const active = lang === o.code
        const Flag = o.Flag
        return (
          <button
            key={o.code}
            type="button"
            className={"lang-fab-btn" + (active ? " is-active" : "")}
            aria-pressed={active}
            aria-label={o.name}
            title={o.name}
            onClick={() => choose(o.code)}
          >
            <span className="flag"><Flag /></span>
            <span className="code">{o.label}</span>
          </button>
        )
      })}
    </div>
  )
}