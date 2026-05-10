import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader.jsx'
import PremiumCard from '../components/PremiumCard.jsx'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

export default function About() {
  useScrollReveal()

  const timeline = [
    {
      year: 'Engineering Core',
      title: 'Electrical Power Engineering Graduate',
      desc: 'Electrical Power Engineering graduate from Helwan University, June 2024.'
    },
    {
      year: 'Procurement Focus',
      title: 'Passionate about procurement engineering',
      desc: 'Technical evaluation, vendor coordination, and project procurement management with strong analytical thinking.'
    },
    {
      year: 'Continuous Growth',
      title: 'Always learning & improving',
      desc: 'Committed to continuous learning, professional growth, and delivering precise engineering documentation.'
    }
  ]

  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader
          kicker="ABOUT"
          title="Engineering discipline meets procurement precision"
          subtitle="A modern timeline that highlights your technical foundation and your procurement strength."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5">
            <PremiumCard className="p-7" >
              <div className="text-sm text-white/60">Profile</div>
              <div className="mt-2 text-2xl font-semibold text-electric-200">Electrical Systems + Procurement</div>
              <p className="mt-3 text-white/70 leading-relaxed">
                I combine electrical engineering understanding with structured procurement workflows—helping teams evaluate technical requirements,
                align vendors, and deliver project-ready documentation.
              </p>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {['Analytical Evaluation', 'Vendor Coordination', 'Electrical Documentation', 'Low Current Systems'].map((t) => (
                  <div key={t} className="text-sm text-white/70 bg-white/5 border border-white/10 rounded-xl px-3 py-2">
                    {t}
                  </div>
                ))}
              </div>
            </PremiumCard>
          </div>

          <div className="lg:col-span-7">
            <div className="relative">
              <div className="absolute left-3 top-0 bottom-0 w-px bg-electric-400/25" />
              <div className="space-y-4">
                {timeline.map((item, idx) => (
                  <motion.div
                    key={item.title}
                    data-reveal
                    initial={{ opacity: 0, x: 18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-10% 0px' }}
                    transition={{ duration: 0.65, delay: idx * 0.08 }}
                    className="relative pl-10"
                  >
                    <div className="absolute left-0 top-2 w-7 h-7 rounded-2xl bg-electric-500/15 border border-electric-400/25 flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-electric-300 shadow-glow" />
                    </div>
                    <PremiumCard className="p-6">
                      <div className="text-xs uppercase tracking-widest text-white/55">{item.year}</div>
                      <div className="mt-2 text-lg font-semibold">{item.title}</div>
                      <div className="mt-2 text-white/70 leading-relaxed">{item.desc}</div>
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

