import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader.jsx'
import PremiumCard from '../components/PremiumCard.jsx'
import { experience } from '../data/portfolioData.js'

export default function Experience() {
  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader
          kicker="EXPERIENCE"
          title="Procurement execution with technical discipline"
          subtitle="Premium animated experience timeline with low-current system coverage."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5">
            <PremiumCard className="p-7">
              <div className="text-xs uppercase tracking-widest text-white/55">Role</div>
              <div className="mt-2 text-2xl font-semibold text-electric-200">{experience.role}</div>
              <div className="mt-3 text-white/70">{experience.company}</div>
              <div className="mt-2 text-white/60">{experience.period}</div>
              <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-electric-400/25 bg-electric-500/10">
                <span className="w-2.5 h-2.5 rounded-full bg-electric-300 shadow-glow" />
                <span className="text-sm font-semibold">{experience.location}</span>
              </div>

              <div className="mt-6">
                <div className="text-sm font-semibold text-white/80">Projects involved</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {experience.projects.map((p) => (
                    <span key={p} className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">{p}</span>
                  ))}
                </div>
              </div>
            </PremiumCard>
          </div>

          <div className="lg:col-span-7">
            <div className="relative">
              <div className="absolute left-4 top-2 bottom-2 w-px bg-electric-400/25" />
              <div className="space-y-4">
                {experience.responsibilities.map((r, idx) => (
                  <motion.div
                    key={r}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.65, delay: idx * 0.06 }}
                    className="relative pl-12"
                  >
                    <div className="absolute left-0 top-3 w-8 h-8 rounded-2xl bg-electric-500/15 border border-electric-400/25 flex items-center justify-center shadow-glow">
                      <div className="w-2.5 h-2.5 rounded-full bg-electric-300" />
                    </div>
                    <PremiumCard className="p-6">
                      <div className="text-white/75 leading-relaxed">{r}</div>
                    </PremiumCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

