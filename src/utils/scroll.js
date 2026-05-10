export function setupSmoothScroll() {
  // Provide anchor smooth scroll even if user has reduced motion disabled.
  const prefersReduced = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches
  if (prefersReduced) return

  document.documentElement.style.scrollBehavior = 'smooth'

  document.addEventListener('click', (e) => {
    const a = e.target?.closest?.('a[href^="#"]')
    if (!a) return
    const id = a.getAttribute('href')
    if (!id || id === '#') return
    const el = document.querySelector(id)
    if (!el) return
    e.preventDefault()
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
}

