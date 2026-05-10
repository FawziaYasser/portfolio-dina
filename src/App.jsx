import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import LoadingGate from './components/LoadingGate.jsx'

import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Education from './sections/Education.jsx'
import Skills from './sections/Skills.jsx'
import Experience from './sections/Experience.jsx'
import Services from './sections/Services.jsx'
import Projects from './sections/Projects.jsx'
import Achievements from './sections/Achievements.jsx'
import Testimonials from './sections/Testimonials.jsx'
import Contact from './sections/Contact.jsx'

import { setupSmoothScroll } from './utils/scroll.js'

export default function App() {
  useEffect(() => {
    setupSmoothScroll()
  }, [])

  return (
    <LoadingGate>
      <div className="min-h-screen bg-[#040A14] text-white">
        <ScrollProgress />
        <Navbar />

        <main>
          <section id="home">
            <Hero />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="education">
            <Education />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="experience">
            <Experience />
          </section>
          <section id="services">
            <Services />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="achievements">
            <Achievements />
          </section>
          <section id="testimonials">
            <Testimonials />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>

        <Footer />
      </div>
    </LoadingGate>
  )
}

