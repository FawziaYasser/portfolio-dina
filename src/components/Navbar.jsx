import { useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { sections } from '../data/portfolioData.js'

export default function Navbar() {
  const { hash } = useLocation()

  const items = useMemo(() => sections, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl px-4 pt-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#040A14]/60 backdrop-blur-xl px-4 py-3 shadow-soft">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-electric-500/15 border border-electric-400/30 flex items-center justify-center">
              <span className="text-electric-200 font-bold">E</span>
            </div>
            <div>
              <div className="text-sm font-semibold leading-tight">Ebtsam Amin Fakhry</div>
              <div className="text-xs text-white/60 leading-tight">Procurement • Electrical Power</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {items.map((s) => {
              const active = hash === `#${s.id}` || (typeof window !== 'undefined' && window.location.hash === `#${s.id}`)
              return (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className={
                    active
                      ? 'text-electric-200 font-semibold'
                      : 'text-white/65 hover:text-white transition-colors text-sm'
                  }
                >
                  {s.label}
                </a>
              )
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-electric-400/30 bg-electric-500/10 hover:bg-electric-500/15 transition-colors text-sm font-semibold text-electric-200"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

