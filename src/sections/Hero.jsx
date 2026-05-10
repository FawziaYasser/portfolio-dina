import { motion } from 'framer-motion'
import { FiDownload, FiMail } from 'react-icons/fi'
import { profile, stats } from '../data/portfolioData.js'
import CircuitBackground from '../components/CircuitBackground.jsx'
import AnimatedCounters from '../components/AnimatedCounters.jsx'
import PremiumCard from '../components/PremiumCard.jsx'

export default function Hero() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="relative rounded-3xl border border-electric-400/20 bg-white/4 backdrop-blur-xl shadow-soft overflow-hidden">
          <CircuitBackground />

          <div className="relative p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-electric-400/20 bg-white/5">
                    <span className="w-2.5 h-2.5 rounded-full bg-electric-400 shadow-glow" />
                    <span className="text-xs uppercase tracking-widest text-electric-200/90">Engineering Portfolio</span>
                  </div>

                  <h1 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight">
                    <span className="text-white">{profile.name}</span>
                    <span className="block text-electric-200 drop-shadow mt-2">{profile.title.split('|')[1]?.trim()}</span>
                  </h1>

                  <p className="mt-5 text-white/70 leading-relaxed max-w-2xl">
                    {profile.intro}
                  </p>

                  <div className="mt-8 flex flex-col sm:flex-row gap-3">
                    <a
                      href="#"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-electric-500/15 border border-electric-400/30 hover:bg-electric-500/20 transition-colors"
                    >
                      <FiDownload className="text-electric-200" />
                      <span className="font-semibold">Download CV</span>
                    </a>
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                    >
                      <FiMail className="text-electric-200" />
                      <span className="font-semibold">Contact Me</span>
                    </a>
                  </div>

                  <div className="mt-6 text-sm text-white/55">
                    Focus: Procurement, Technical Evaluation, Electrical Power & Low Current Systems.
                  </div>
                </motion.div>
              </div>

              <div className="lg:col-span-5">
                <PremiumCard className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-xs uppercase tracking-widest text-white/55">At a glance</div>
                      <div className="text-2xl font-semibold mt-2 text-electric-200">Performance Snapshot</div>
                    </div>
                  </div>

                  <AnimatedCounters items={stats} />

                  <div className="mt-6 text-xs text-white/55 leading-relaxed">
                    Scroll to explore a modern, engineering-focused layout with premium glass UI, circuit visuals, and smooth transitions.
                  </div>
                </PremiumCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

