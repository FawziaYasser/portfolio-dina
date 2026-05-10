import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader.jsx'
import PremiumCard from '../components/PremiumCard.jsx'
import { projects } from '../data/portfolioData.js'

export default function Projects() {
  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader kicker="PROJECTS" title="Selected projects & procurement impact" subtitle="Featured projects with animated hover effects and clear engineering structure." />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {projects.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: idx * 0.05 }}
              className="lg:col-span-6"
            >
              <PremiumCard className="p-7 h-full group">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-white/55">Featured</div>
                    <div className="mt-2 text-xl font-semibold group-hover:text-electric-200 transition-colors">{p.title}</div>
                  </div>
                  <div className="hidden sm:block w-12 h-12 rounded-2xl bg-electric-500/10 border border-electric-400/25 shadow-glow" />
                </div>

                <p className="mt-4 text-white/70 leading-relaxed">{p.overview}</p>

                <div className="mt-5">
                  <div className="text-sm font-semibold text-white/80">Technologies used</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.technologies.map((t) => (
                      <span key={t} className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="mt-5">
                  <div className="text-sm font-semibold text-white/80">Responsibilities</div>
                  <ul className="mt-2 space-y-2">
                    {p.responsibilities.map((r) => (
                      <li key={r} className="text-sm text-white/70 flex items-start gap-2">
                        <span className="mt-2 w-2 h-2 rounded-full bg-electric-300 shadow-glow flex-none" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 h-1 w-full bg-gradient-to-r from-electric-400/40 via-cyan-200/10 to-transparent rounded-full" />
              </PremiumCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

