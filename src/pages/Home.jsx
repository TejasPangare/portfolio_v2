import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowUp } from 'react-icons/fi'
import { useInView } from 'react-intersection-observer'
import About from '../components/About'
import Certifications from '../components/Certifications'
import Contact from '../components/Contact'
import Education from '../components/Education'
import Experience from '../components/Experience'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import TechUniverse from '../components/TechUniverse'
import { useTheme } from '../hooks/useTheme'

function Home() {
  const { theme, toggleTheme } = useTheme()
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [showIntro, setShowIntro] = useState(true)

  const observerOptions = {
    threshold: 0.35,
    rootMargin: '-20% 0px -20% 0px',
  }

  const { ref: homeRef, inView: homeInView } = useInView(observerOptions)
  const { ref: aboutRef, inView: aboutInView } = useInView(observerOptions)
  const { ref: experienceRef, inView: experienceInView } = useInView(observerOptions)
  const { ref: projectsRef, inView: projectsInView } = useInView(observerOptions)
  const { ref: skillsRef, inView: skillsInView } = useInView(observerOptions)
  const { ref: certificationsRef, inView: certificationsInView } = useInView(observerOptions)
  const { ref: educationRef, inView: educationInView } = useInView(observerOptions)
  const { ref: contactRef, inView: contactInView } = useInView(observerOptions)

  useEffect(() => {
    const onScroll = () => {
      setShowBackToTop(window.scrollY > 220)
    }

    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const timer = window.setTimeout(() => setShowIntro(false), 2400)
    return () => window.clearTimeout(timer)
  }, [])

  let activeSection = 'home'
  if (contactInView) activeSection = 'contact'
  else if (educationInView) activeSection = 'education'
  else if (certificationsInView) activeSection = 'certifications'
  else if (skillsInView) activeSection = 'skills'
  else if (projectsInView) activeSection = 'projects'
  else if (experienceInView) activeSection = 'experience'
  else if (aboutInView) activeSection = 'about'
  else if (homeInView) activeSection = 'home'

  const handleScrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="relative overflow-x-hidden">
      <AnimatePresence>
        {showIntro ? (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.45 } }}
            className="pointer-events-none fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/35 backdrop-blur-[2px]"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-panel relative w-[min(24rem,calc(100%-2rem))] overflow-hidden rounded-[2rem] p-5"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-display text-lg font-bold">Swipe to explore</div>
                  <div className="mt-1 text-sm text-[color:var(--muted)]">
                    Smooth sections, interactive tools, and premium UI motion.
                  </div>
                </div>
              </div>
              <div className="relative mt-6 h-24 rounded-[1.5rem] border border-white/10 bg-white/6">
                <motion.div
                  animate={{ x: ['-10%', '72%', '18%'] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-1/2 -translate-y-1/2"
                >
                  <div className="relative h-16 w-16 rounded-full bg-gradient-to-br from-sky-300 to-cyan-200 shadow-[0_14px_30px_rgba(56,189,248,0.35)]">
                    <div className="absolute left-6 top-2 h-10 w-3 rounded-full bg-slate-950/20" />
                    <div className="absolute left-8 top-0 h-8 w-3 rounded-full bg-slate-950/20" />
                  </div>
                </motion.div>
                <motion.div
                  animate={{ opacity: [0.25, 1, 0.25], scaleX: [0.7, 1, 0.7] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute inset-x-6 top-1/2 h-[2px] -translate-y-1/2 bg-gradient-to-r from-transparent via-sky-300 to-transparent"
                />
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-8rem] top-20 h-64 w-64 rounded-full bg-sky-400/18 blur-3xl" />
        <div className="absolute right-[-5rem] top-80 h-72 w-72 rounded-full bg-fuchsia-400/14 blur-3xl" />
        <div className="absolute bottom-40 left-1/3 h-80 w-80 rounded-full bg-amber-300/10 blur-3xl" />
      </div>

      <Navbar
        activeSection={activeSection}
        onNavClick={handleScrollTo}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <main className="relative z-10">
        <div ref={homeRef}>
          <Hero onContactClick={() => handleScrollTo('contact')} />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={experienceRef}>
          <Experience />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
        <div ref={skillsRef}>
          <TechUniverse />
        </div>
        <div ref={certificationsRef}>
          <Certifications />
        </div>
        <div ref={educationRef}>
          <Education />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
      </main>

      <Footer />

      <motion.button
        type="button"
        onClick={() => handleScrollTo('home')}
        initial={false}
        animate={{
          opacity: showBackToTop ? 1 : 0,
          y: showBackToTop ? 0 : 20,
          pointerEvents: showBackToTop ? 'auto' : 'none',
        }}
        className="fixed bottom-5 right-5 z-[55] inline-flex items-center gap-2 rounded-full bg-[color:var(--accent-strong)] px-4 py-3 font-semibold text-slate-950 shadow-[0_18px_40px_rgba(14,165,233,0.25)]"
      >
        <FiArrowUp />
        Top
      </motion.button>
    </div>
  )
}

export default Home
