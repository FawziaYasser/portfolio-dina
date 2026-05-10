export default function CircuitBackground() {
  return (
    <div className="absolute inset-0 opacity-70">
      <svg
        viewBox="0 0 1200 600"
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="rgba(0,191,255,0.35)" />
            <stop offset="1" stopColor="rgba(0,191,255,0.05)" />
          </linearGradient>
        </defs>

        {/* grid */}
        {Array.from({ length: 18 }).map((_, i) => {
          const y = (i + 1) * 28
          return <line key={i} x1="0" x2="1200" y1={y} y2={y} stroke="rgba(0,191,255,0.10)" strokeWidth="1" />
        })}
        {Array.from({ length: 22 }).map((_, i) => {
          const x = (i + 1) * 48
          return <line key={i} y1="0" y2="600" x1={x} x2={x} stroke="rgba(0,191,255,0.08)" strokeWidth="1" />
        })}

        {/* circuit path */}
        <path
          d="M80,120 C220,40 320,80 420,160 C520,240 620,220 720,140 C820,60 920,80 1030,170"
          fill="none"
          stroke="url(#g)"
          strokeWidth="2"
          strokeDasharray="8 10"
        />

        {/* nodes */}
        {[
          [80, 120],
          [420, 160],
          [720, 140],
          [1030, 170]
        ].map(([x, y], idx) => (
          <g key={idx}>
            <circle cx={x} cy={y} r="7" fill="rgba(0,191,255,0.25)" />
            <circle cx={x} cy={y} r="3.5" fill="rgba(0,191,255,0.85)" />
          </g>
        ))}
      </svg>
    </div>
  )
}

