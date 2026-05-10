export default function PremiumCard({ children, className = '' }) {
  return (
    <div
      className={
        'rounded-3xl border border-electric-400/20 bg-white/4 backdrop-blur-xl shadow-soft ' +
        className
      }
    >
      <div className="absolute inset-0 pointer-events-none" />
      {children}
    </div>
  )
}

