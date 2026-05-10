import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader.jsx'
import PremiumCard from '../components/PremiumCard.jsx'
import { contact } from '../data/portfolioData.js'
import { FiLinkedin, FiMail, FiMapPin, FiPhone } from 'react-icons/fi'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader
          kicker="CONTACT"
          title="Let’s build with precision"
          subtitle="Fast, recruiter-friendly contact section with smooth reveal and interactive form."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div className="lg:col-span-6">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <PremiumCard className="p-7">
                <div className="text-sm text-white/60">Contact Form</div>
                <div className="mt-2 text-xl font-semibold text-electric-200">Send a message</div>

                <form
                  className="mt-5 grid gap-3"
                  onSubmit={(e) => {
                    e.preventDefault()
                    setSent(true)
                    setTimeout(() => setSent(false), 2800)
                  }}
                >
                  <input
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    placeholder="Your name"
                    className="h-12 rounded-2xl bg-white/5 border border-white/10 px-4 focus:outline-none focus:ring-2 focus:ring-electric-400/40"
                    required
                  />
                  <input
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    placeholder="Email"
                    type="email"
                    className="h-12 rounded-2xl bg-white/5 border border-white/10 px-4 focus:outline-none focus:ring-2 focus:ring-electric-400/40"
                    required
                  />
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    placeholder="Message"
                    rows={5}
                    className="rounded-2xl bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-electric-400/40"
                    required
                  />

                  <button
                    type="submit"
                    className="h-12 rounded-2xl bg-electric-500/15 border border-electric-400/30 hover:bg-electric-500/20 transition-colors font-semibold"
                  >
                    {sent ? 'Message queued ✓' : 'Contact Me'}
                  </button>

                  <div className="text-xs text-white/55 leading-relaxed">
                    This demo form simulates sending for fast performance. Hook up your backend or email service when deploying.
                  </div>
                </form>
              </PremiumCard>
            </motion.div>
          </div>

          <div className="lg:col-span-6">
            <div className="space-y-4">
              <PremiumCard className="p-7">
                <div className="text-sm text-white/60">Direct Contact</div>
                <div className="mt-2 text-xl font-semibold text-electric-200">Details</div>

                <div className="mt-5 space-y-3">
                  <div className="flex items-center gap-3 text-white/75">
                    <FiMail className="text-electric-200" />
                    <a href={`mailto:${contact.email}`} className="hover:text-white transition-colors">{contact.email}</a>
                  </div>
                  <div className="flex items-center gap-3 text-white/75">
                    <FiPhone className="text-electric-200" />
                    <a href={`tel:${contact.phone}`} className="hover:text-white transition-colors">{contact.phone}</a>
                  </div>
                  <div className="flex items-center gap-3 text-white/75">
                    <FiMapPin className="text-electric-200" />
                    <span>{contact.location}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FiLinkedin className="text-electric-200" />
                    <a href={contact.linkedin} target="_blank" rel="noreferrer" className="text-white/75 hover:text-white transition-colors">LinkedIn</a>
                  </div>
                </div>
              </PremiumCard>

              <PremiumCard className="p-0 overflow-hidden">
                <div className="p-7">
                  <div className="text-sm text-white/60">Location Map</div>
                  <div className="mt-2 text-xl font-semibold text-electric-200">Ain Shams, Cairo</div>
                  <div className="mt-3 text-white/65 text-sm">Interactive map (replace coordinates on deployment).</div>
                </div>
                <div className="w-full h-72">
                  <iframe
                    title="map"
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=31.271%2C30.067%2C31.365%2C30.134&layer=mapnik&marker=30.101%2C31.318"
                  />
                </div>
              </PremiumCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

