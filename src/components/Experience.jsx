import { motion } from 'framer-motion'
import { experience } from '../data/experience'

function Experience() {
  return (
    <section id="experience" className="section-shell py-14 sm:py-20">
      <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.24em]">Experience</p>
      <h2 className="section-title mt-4">A timeline of product work, delivery, and growth.</h2>
      <p className="section-copy">
        From internships to freelance builds, each role sharpened my ability to craft thoughtful UI
        and collaborate across the stack.
      </p>

      <div className="relative mt-12">
        <div className="contrast-line absolute left-4 top-0 hidden h-full w-px md:block" />
        <div className="space-y-8">
          {experience.map((item, index) => (
            <motion.article
              key={`${item.company}-${item.role}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65 }}
              className="relative md:pl-12"
            >
              <div className="absolute left-0 top-8 hidden h-3 w-3 rounded-full bg-[color:var(--accent-strong)] shadow-[0_0_20px_rgba(14,165,233,0.35)] md:block" />
              <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="font-display text-2xl font-bold">{item.role}</h3>
                    <p className="mt-2 text-lg text-[color:var(--accent-text)]">{item.company}</p>
                  </div>
                  <span className="surface-pill rounded-full px-4 py-2 text-sm text-[color:var(--muted)]">
                    {item.duration}
                  </span>
                </div>
                <ul className="mt-6 space-y-3 text-sm leading-7 text-[color:var(--muted)] sm:text-base">
                  {item.responsibilities.map((responsibility) => (
                    <li key={responsibility}>{responsibility}</li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="surface-pill rounded-full px-3 py-2 text-xs uppercase tracking-[0.18em]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
