import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader.jsx'
import PremiumCard from '../components/PremiumCard.jsx'
import { testimonials } from '../data/portfolioData.js'

export default function Testimonials() {
  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader kicker="TESTIMONIALS" title="Managers recognize procurement efficiency" subtitle="Elegant testimonial cards with professional tone and smooth transitions." />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.quote}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: idx * 0.05 }}
            >
              <PremiumCard className="p-7 h-full">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-electric-500/10 border border-electric-400/25 shadow-glow" />
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-xs text-white/60">{t.company}</div>
                  </div>
                </div>
                <div className="mt-4 text-white/70 leading-relaxed">“{t.quote}”</div>
                <div className="mt-6 h-1 w-28 bg-gradient-to-r from-electric-400 to-transparent rounded-full" />
              </PremiumCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

