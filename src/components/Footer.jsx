import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

function Footer() {
  return (
    <footer className="section-shell pb-10 pt-8">
      <div className="glass-panel flex flex-col gap-6 rounded-[2rem] p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="font-display text-xl font-bold">Tejas Portfolio</div>
          <p className="mt-2 text-sm text-[color:var(--muted)]">
            Crafted with React, Tailwind, Framer Motion, and a lot of attention to detail.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <a href="mailto:tejas@example.com" className="rounded-full border border-white/10 bg-white/6 p-3">
            <FiMail />
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/6 p-3">
            <FiGithub />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/6 p-3">
            <FiLinkedin />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
