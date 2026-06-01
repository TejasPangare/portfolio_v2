import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiDownload, FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

function Navbar({ activeSection, onNavClick, theme, toggleTheme }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleNavClick = (id) => {
    onNavClick(id)
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 border-b border-white/10 bg-[color:var(--bg-soft)]/85 backdrop-blur-xl"
    >
      <div className="section-shell py-4">
        <div className="flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => handleNavClick('home')}
            className="font-display text-lg font-bold tracking-[0.22em] uppercase"
          >
            Tejas
          </button>

          <nav className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.id
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`rounded-full px-4 py-2 text-sm transition ${
                    isActive
                      ? 'bg-white/12 shadow-[0_0_0_1px_rgba(255,255,255,0.12)]'
                      : 'text-[color:var(--muted)] hover:bg-white/6 hover:text-[color:var(--text)]'
                  }`}
                >
                  {item.label}
                </button>
              )
            })}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="/resume.pdf"
              className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm font-semibold transition hover:scale-[1.02] sm:flex"
            >
              <FiDownload />
              Resume
            </a>
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="rounded-full border border-white/10 bg-white/8 p-3 transition hover:scale-105"
            >
              {theme === 'dark' ? <FiSun /> : <FiMoon />}
            </button>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              className="rounded-full border border-white/10 bg-white/8 p-3 transition hover:scale-105 lg:hidden"
            >
              {isMobileMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen ? (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden lg:hidden"
            >
              <div className="mt-4 rounded-[1.75rem] border border-white/10 bg-white/6 p-4">
                <div className="grid gap-2">
                  {navItems.map((item) => {
                    const isActive = activeSection === item.id
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => handleNavClick(item.id)}
                        className={`rounded-2xl px-4 py-3 text-left text-sm transition ${
                          isActive
                            ? 'bg-[color:var(--accent-strong)] text-slate-950'
                            : 'bg-white/6 text-[color:var(--text)]'
                        }`}
                      >
                        {item.label}
                      </button>
                    )
                  })}
                  <a
                    href="/resume.pdf"
                    className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-sm font-semibold"
                  >
                    <FiDownload />
                    Resume
                  </a>
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

export default Navbar
