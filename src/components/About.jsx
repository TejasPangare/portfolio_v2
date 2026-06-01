import { motion } from 'framer-motion'

const highlights = [
  { label: 'Years of experience', value: '1.5+' },
  { label: 'Specialties', value: 'React, Full Stack, AI' },
  { label: 'Current focus', value: 'Interactive products' },
]

function About() {
  return (
    <section id="about" className="section-shell py-14 sm:py-20">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.24em]">About Me</p>
          <h2 className="section-title mt-4">Building modern products with clarity, motion, and purpose.</h2>
          <p className="section-copy">
            I enjoy turning ideas into polished web experiences that balance aesthetics with
            usability. My work sits at the intersection of frontend engineering, full stack product
            thinking, and practical AI integration.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="glass-panel rounded-[2rem] p-6 sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-3">
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="surface-card rounded-2xl p-4"
              >
                <div className="text-sm text-[color:var(--muted)]">{item.label}</div>
                <div className="mt-3 font-display text-xl font-bold">{item.value}</div>
              </motion.div>
            ))}
          </div>
          <div className="mt-6 space-y-4 text-sm leading-7 text-[color:var(--muted)] sm:text-base">
            {[
              'I focus on premium-feeling interfaces that are recruiter-friendly, responsive, and grounded in clean component architecture.',
              'My strongest areas are React development, motion-rich UI implementation, API integration, and building full stack products with maintainable structure.',
              'Right now I am especially interested in AI-assisted workflows, product storytelling, and systems that make complex tasks feel simple.',
            ].map((line, index) => (
              <motion.p
                key={line}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.12 * index }}
              >
                {line}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
