import { useEffect, useState } from 'react'
import { FiArrowUp } from 'react-icons/fi'

export default function ScrollToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 600)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!show) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-[70] h-11 w-11 rounded-2xl border border-electric-400/30 bg-electric-500/10 hover:bg-electric-500/15 text-electric-200 shadow-soft flex items-center justify-center transition-colors"
      aria-label="Scroll to top"
    >
      <FiArrowUp />
    </button>
  )
}

