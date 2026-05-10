import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'

export default function AnimatedCounters({ items = [] }) {
  const [values, setValues] = useState(() => items.map(() => 0))

  useEffect(() => {
    let raf
    const start = performance.now()
    const duration = 1100

    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 3)

      setValues(
        items.map((it) => {
          const target = typeof it.value === 'number' ? it.value : parseFloat(it.value) || 0
          return Math.round(target * eased)
        })
      )

      if (t < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [items])

  const grid = useMemo(() => (items.length ? items.length : 1), [items.length])

  return (
    <div className="mt-7 grid grid-cols-2 gap-4 md:grid-cols-2">
      {items.map((it, idx) => (
        <motion.div
          key={it.label ?? idx}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: idx * 0.06 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-4"
        >
          <div className="text-2xl md:text-3xl font-semibold text-electric-200">
            {values[idx] ?? 0}
          </div>
          <div className="text-xs text-white/55 mt-1 leading-relaxed">{it.label}</div>
        </motion.div>
      ))}
    </div>
  )
}

