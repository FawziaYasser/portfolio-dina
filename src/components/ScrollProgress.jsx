import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const total = doc.scrollHeight - doc.clientHeight
      const p = total > 0 ? (doc.scrollTop / total) * 100 : 0
      setProgress(p)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] pointer-events-none">
      <div className="h-1 bg-electric-400/20">
        <div
          className="h-full bg-electric-400 shadow-glow"
          style={{ width: `${progress}%`, transition: 'width 0.08s linear' }}
        />
      </div>
    </div>
  )
}

