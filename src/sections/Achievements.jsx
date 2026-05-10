import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader.jsx'
import PremiumCard from '../components/PremiumCard.jsx'
import { achievements } from '../data/portfolioData.js'

export default function Achievements() {
  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader kicker="ACHIEVEMENTS" title="Glowing milestones & continuous growth" subtitle="Training-focused and procurement-ready achievements with subtle electrical glow." />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div className="lg:col-span-5 space-y-4">
            {achievements.graduation.map((t, idx) => (
              <motion.div
                key={t}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: idx * 0.07 }}
              >
                <PremiumCard className="p-7">
                  <div className="text-xs uppercase tracking-widest text-white/55">Achievement</div>
                  <div className="mt-2 text-lg font-semibold text-electric-200">{t}</div>
                  <div className="mt-4 w-20 h-1 rounded-full bg-gradient-to-r from-electric-400 to-transparent shadow-glow" />
                </PremiumCard>
              </motion.div>
            ))}
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {achievements.trainings.map((tr, idx) => (
                <motion.div
                  key={tr.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65, delay: idx * 0.05 }}
                >
                  <PremiumCard className="p-6">
                    <div className="w-10 h-10 rounded-2xl bg-electric-500/10 border border-electric-400/25 flex items-center justify-center shadow-glow">
                      <div className="w-2.5 h-2.5 rounded-full bg-electric-300" />
                    </div>
                    <div className="mt-4 text-sm text-white/70">{tr.subtitle}</div>
                    <div className="mt-2 font-semibold text-lg">{tr.title}</div>
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

