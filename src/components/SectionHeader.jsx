export default function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-10">
      {eyebrow ? (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-electric-400/20 bg-white/5">
          <span className="w-2 h-2 rounded-full bg-electric-400 shadow-glow" />
          <span className="text-xs uppercase tracking-widest text-white/60">{eyebrow}</span>
        </div>
      ) : null}

      {title ? (
        <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
          <span className="text-white">{title}</span>
        </h2>
      ) : null}

      {subtitle ? (
        <p className="mt-4 text-white/65 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}

