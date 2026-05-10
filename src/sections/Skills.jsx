import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader.jsx'
import PremiumCard from '../components/PremiumCard.jsx'
import { skills } from '../data/portfolioData.js'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

const barData = [
  { label: 'Electrical Design', value: 88 },
  { label: 'Procurement', value: 84 },
  { label: 'BOQ & Tendering', value: 82 },
  { label: 'Vendor Coordination', value: 86 },
  { label: 'Low Current Systems', value: 80 }
]

function SkillBar({ label, value }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="text-sm text-white/75">{label}</div>
        <div className="text-xs text-electric-200/85">{value}%</div>
      </div>
      <div className="h-2 rounded-full bg-white/5 border border-white/10 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-electric-400 to-cyan-200 shadow-glow"
        />
      </div>
    </div>
  )
}

export default function Skills() {
  useScrollReveal()

  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader
          kicker="SKILLS"
          title="Technical strength with procurement clarity"
          subtitle="Animated skill bars and premium glass cards across technical, engineering, personal, and languages."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-5 flex flex-col h-full">
            <PremiumCard className="p-7 h-full flex flex-col">
              <div className="text-xs uppercase tracking-widest text-white/55">Core Strength</div>
              <div className="mt-2 text-xl font-semibold text-electric-200">Engineering Skill Bars</div>
              <div className="mt-4 space-y-5">
                {barData.map((b) => (
                  <SkillBar key={b.label} label={b.label} value={b.value} />
                ))}
              </div>
            </PremiumCard>
          </div>

          <div className="lg:col-span-7 h-full self-stretch">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch h-full">
              {[{
                title: 'Technical Skills',
                items: skills.technical
              }, {
                title: 'Engineering Skills',
                items: skills.engineering
              }, {
                title: 'Personal Skills',
                items: skills.personal
              }, {
                title: 'Languages',
                items: skills.languages
              }].map((col, idx) => (
                <motion.div
                  key={col.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65, delay: idx * 0.06 }}
                >
                  <PremiumCard className="p-6 h-full flex flex-col relative overflow-hidden">
                    {/* header accent */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-electric-300/60 via-electric-400/40 to-cyan-200/30" />

                    <div className="relative">
                      <div className="text-sm text-white/75">{col.title}</div>

                      <div className="mt-4 grid grid-cols-1 gap-2">
                        {col.items.map((t) => (
                          <div
                            key={t}
                            className="group relative text-sm text-white/80 bg-white/5 border border-white/10 rounded-xl px-3 py-2 flex items-center gap-2"
                          >
                            <span className="w-2 h-2 rounded-full bg-electric-300/80 shadow-glow" />
                            <span className="leading-snug">{t}</span>
                            <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-gradient-to-r from-electric-400/15 via-electric-300/0 to-cyan-200/10" />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex-1" />
                  </PremiumCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

