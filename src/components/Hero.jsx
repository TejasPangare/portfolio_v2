import { motion } from 'framer-motion'
import { FiArrowRight, FiDownload } from 'react-icons/fi'

function Hero({ onContactClick }) {
  return (
    <section id="home" className="relative overflow-hidden pt-14 sm:pt-20">
      <div className="absolute inset-0 soft-grid opacity-30" />
      <div className="section-shell relative grid items-center gap-10 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
        <div className="min-w-0">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="accent-chip inline-flex max-w-full rounded-full px-4 py-2 text-center text-xs sm:text-sm"
          >
            Software Developer | Frontend and Full Stack Builder
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="font-display mt-6 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
          >
            Designing premium digital experiences that feel polished, fast, and memorable.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2 }}
            className="mt-6 max-w-2xl text-base leading-7 text-[color:var(--muted)] sm:text-lg sm:leading-8"
          >
            I&apos;m Tejas, a developer focused on React, full stack product building, and practical AI
            integrations. I build recruiter-friendly interfaces and robust app experiences with a
            strong eye for interaction design.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.3 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="/resume.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--accent-strong)] px-6 py-3 font-semibold text-slate-950 transition hover:translate-y-[-2px]"
            >
              <FiDownload />
              Download Resume
            </a>
            <button
              type="button"
              onClick={onContactClick}
              className="surface-pill inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold transition hover:translate-y-[-2px]"
            >
              Contact Me
              <FiArrowRight />
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md min-w-0"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="glass-panel relative overflow-hidden rounded-[2rem] p-4 sm:p-6"
          >
            <div className="absolute inset-x-10 top-0 h-40 rounded-full bg-sky-400/25 blur-3xl" />
            <div className="absolute -bottom-16 right-0 h-44 w-44 rounded-full bg-fuchsia-400/18 blur-3xl" />
            <div className="contrast-panel relative rounded-[1.6rem] p-5 text-center sm:p-8">
              <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-[2rem] bg-gradient-to-br from-sky-300 via-cyan-200 to-amber-200 text-4xl font-extrabold text-slate-950 shadow-2xl sm:h-40 sm:w-40 sm:text-5xl">
                T
              </div>
              <h2 className="mt-5 font-display text-2xl font-bold">Tejas</h2>
              <p className="mt-2 px-2 text-sm leading-6 text-[color:var(--muted)]">
                React Developer | Full Stack Explorer | AI Workflow Builder
              </p>
              <div className="mt-6 grid grid-cols-1 gap-3 text-left sm:grid-cols-3">
                {[
                  ['Projects', '12+'],
                  ['Experience', '1.5Y'],
                  ['Focus', 'UI + AI'],
                ].map(([label, value]) => (
                  <div key={label} className="surface-card rounded-2xl p-3">
                    <div className="text-xs uppercase tracking-[0.16em] text-[color:var(--muted)]">
                      {label}
                    </div>
                    <div className="mt-2 text-lg font-bold">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
