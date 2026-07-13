import React from "react"
import ReactDOM from "react-dom/client"
import LanguageToggle from "./scripts/LanguageToggle"
import ContactModal from "./scripts/ContactModal"
import { applyLang, getInitialLang } from "./scripts/i18n"

// ── Language toggle ──────────────────────────────────────────────
applyLang(getInitialLang())

let fabRoot = document.querySelector("#lang-fab-root")
if (!fabRoot) {
  fabRoot = document.createElement("div")
  fabRoot.id = "lang-fab-root"
  document.body.appendChild(fabRoot)
}
ReactDOM.createRoot(fabRoot).render(<LanguageToggle />)

// ── Contact modal (opens from any "Book Diagnostic" / #book CTA) ──
let modalRoot = document.querySelector("#fcl-contact-root")
if (!modalRoot) {
  modalRoot = document.createElement("div")
  modalRoot.id = "fcl-contact-root"
  document.body.appendChild(modalRoot)
}
ReactDOM.createRoot(modalRoot).render(<ContactModal />)

document.querySelectorAll('a[href="#book"]').forEach(function (a) {
  a.addEventListener("click", function (e) {
    e.preventDefault()
    window.dispatchEvent(new CustomEvent("fcl:open-contact"))
  })
})

// ── Smart header: hide on scroll-down, reveal on scroll-up ────────
;(function () {
  const header = document.querySelector(".site-header")
  if (!header) return

  const THRESHOLD = 120
  const DELTA = 6
  let last = window.scrollY
  let ticking = false

  function update() {
    const y = window.scrollY
    if (Math.abs(y - last) > DELTA) {
      if (y > last && y > THRESHOLD) header.classList.add("is-hidden")
      else header.classList.remove("is-hidden")
      last = y
    }
    ticking = false
  }

  window.addEventListener(
    "scroll",
    function () {
      if (!ticking) {
        window.requestAnimationFrame(update)
        ticking = true
      }
    },
    { passive: true }
  )
})()

// ── Reveal-on-scroll para las cards de metodología (entrada en escalera) ──
;(function () {
  const groups = document.querySelectorAll(".pillars")
  if (!groups.length) return

  function revealAll(container) {
    container.querySelectorAll(".pillar").forEach(function (c, i) {
      setTimeout(function () { c.classList.add("is-in") }, i * 90)
    })
  }

  if (!("IntersectionObserver" in window)) {
    groups.forEach(revealAll)
    return
  }

  const io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          revealAll(e.target)
          io.unobserve(e.target)
        }
      })
    },
    { threshold: 0.15 }
  )
  groups.forEach(function (g) { io.observe(g) })

  // Failsafe: revela cualquier card que no haya entrado a los 2.5s
  setTimeout(function () {
    groups.forEach(function (g) {
      g.querySelectorAll(".pillar:not(.is-in)").forEach(function (c) { c.classList.add("is-in") })
    })
  }, 2500)
})()

// ── Flechas del carrusel de metodología ──
document.querySelectorAll(".pnav").forEach(function (btn) {
  btn.addEventListener("click", function () {
    const band = btn.closest(".method-band")
    if (!band) return
    const track = band.querySelector(".pillars")
    const card = track.querySelector(".pillar")
    const step = (card ? card.getBoundingClientRect().width : 280) + 16
    track.scrollBy({ left: step * parseInt(btn.getAttribute("data-dir"), 10), behavior: "smooth" })
  })
})

// ── Marquee continuo de la sección de metodología ──
;(function () {
  const tracks = document.querySelectorAll(".pillars")
  if (!tracks.length) return
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches

  tracks.forEach(function (track) {
    const viewport = track.closest(".pillars-viewport")
    if (!viewport || reduce) return

    const originals = Array.from(track.children)
    if (!originals.length) return

    // Duplicar el set para un loop sin costura
    originals.forEach(function (node) {
      const clone = node.cloneNode(true)
      clone.setAttribute("aria-hidden", "true")
      clone.classList.add("is-clone")
      track.appendChild(clone)
    })

    function measure() {
      const style = getComputedStyle(track)
      const gap = parseFloat(style.columnGap || style.gap || "16") || 16
      let shift = 0
      originals.forEach(function (n) { shift += n.getBoundingClientRect().width + gap })
      track.style.setProperty("--marquee-shift", "-" + shift + "px")
      const speed = 55 // px por segundo
      track.style.setProperty("--marquee-dur", (shift / speed).toFixed(1) + "s")
    }
    measure()

    let rt
    window.addEventListener("resize", function () {
      clearTimeout(rt)
      rt = setTimeout(measure, 200)
    }, { passive: true })
  })
})()