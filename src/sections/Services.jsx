import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader.jsx'
import PremiumCard from '../components/PremiumCard.jsx'
import { services } from '../data/portfolioData.js'

export default function Services() {
  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader kicker="SERVICES" title="Consulting & procurement services" subtitle="Modern service cards with premium hover and glass transitions." />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, idx) => (
            <motion.div
              key={s}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: idx * 0.06 }}
            >
              <PremiumCard className="p-6 h-full group">
                <div className="text-sm text-white/70">Service</div>
                <div className="mt-2 text-lg font-semibold group-hover:text-electric-200 transition-colors">{s}</div>
                <div className="mt-4 flex items-center gap-2 text-xs text-white/55">
                  <span className="w-2 h-2 rounded-full bg-electric-300 shadow-glow" />
                  <span>Glass UI • Engineering precision • Fast delivery</span>
                </div>
                <div className="mt-5 h-1 w-24 bg-gradient-to-r from-electric-400 to-transparent rounded-full" />
              </PremiumCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

