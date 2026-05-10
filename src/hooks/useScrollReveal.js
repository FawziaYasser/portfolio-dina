import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('[data-reveal]'))
    if (els.length === 0) return

    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches

    if (reduce) {
      els.forEach((el) => {
        el.classList.add('reveal-ready')
      })
      return
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('reveal-ready')
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.18, rootMargin: '0px 0px -10% 0px' }
    )

    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

