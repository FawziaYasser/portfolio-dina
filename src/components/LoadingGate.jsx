import { useEffect, useState } from 'react'

export default function LoadingGate({ children }) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const t = window.setTimeout(() => setReady(true), 250)
    return () => window.clearTimeout(t)
  }, [])

  if (!ready) {
    return (
      <div className="min-h-screen bg-[#040A14] text-white flex items-center justify-center">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 rounded-2xl border border-electric-400/30 bg-electric-500/10 flex items-center justify-center">
            <span className="font-bold text-electric-200">E</span>
          </div>
          <div className="mt-4 text-sm text-white/60">Loading portfolio…</div>
        </div>
      </div>
    )
  }

  return children
}

