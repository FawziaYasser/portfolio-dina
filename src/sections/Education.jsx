import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader.jsx'
import PremiumCard from '../components/PremiumCard.jsx'
import { education } from '../data/portfolioData.js'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

export default function Education() {
  useScrollReveal()

  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader kicker="EDUCATION" title="Formal foundation & project excellence" subtitle="Elegant animated cards for your degree and graduation projects." />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="h-[320px]"
            >
              <PremiumCard className="p-7 h-full flex flex-col">
                <div className="text-xs uppercase tracking-widest text-white/55">Degree</div>
                <div className="mt-2 text-2xl font-semibold text-electric-200">{education.degree}</div>
                <div className="mt-3 text-white/70">{education.school} — {education.date}</div>
                <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-electric-400/25 bg-electric-500/10">
                  <span className="w-2.5 h-2.5 rounded-full bg-electric-300 shadow-glow" />
                  <span className="text-sm font-semibold">Overall Grade: {education.grade}</span>
                </div>
                <div className="flex-1" />
              </PremiumCard>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
              {education.projects.map((p, idx) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65, delay: idx * 0.08 }}
                  className="h-[320px]"
                >
                  <PremiumCard className="p-6 h-full flex flex-col relative overflow-hidden">
                    {/* top accent */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-electric-300/60 via-electric-400/40 to-electric-500/30" />

                    <div className="relative">
                      <div className="text-xs uppercase tracking-widest text-white/55">Graduation Project</div>
                      <div className="mt-2 text-lg font-semibold leading-snug">{p.title}</div>
                      <div className="mt-3 text-sm text-white/70">{p.grade}</div>

                      {/* smarter bottom decoration */}
                      <div className="mt-5 flex items-end gap-3">
                        <div className="h-10 w-2.5 rounded-full bg-gradient-to-b from-electric-400/70 to-electric-400/0 shadow-glow" />
                        <div className="h-1.5 flex-1 rounded-full bg-electric-400/30 shadow-glow" />
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

