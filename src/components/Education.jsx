import { motion } from 'framer-motion'

const education = [
  {
    degree: 'Bachelor of Technology in Computer Science',
    institution: 'Your University Name',
    duration: '2021 - 2025',
    score: 'CGPA: 8.7/10',
  },
  {
    degree: 'Higher Secondary Education',
    institution: 'Your School Name',
    duration: '2019 - 2021',
    score: 'Percentage: 92%',
  },
]

function Education() {
  return (
    <section id="education" className="section-shell py-14 sm:py-20">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-300">Education</p>
      <h2 className="section-title mt-4">Academic milestones that shaped my technical base.</h2>

      <div className="relative mt-12 space-y-6">
        <div className="absolute left-4 top-0 hidden h-full w-px bg-white/10 md:block" />
        {education.map((item, index) => (
          <motion.article
            key={item.degree}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            className="relative md:pl-12"
          >
            <div className="absolute left-0 top-8 hidden h-3 w-3 rounded-full bg-amber-300 shadow-[0_0_18px_rgba(252,211,77,0.65)] md:block" />
            <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-display text-2xl font-bold">{item.degree}</h3>
                  <p className="mt-2 text-lg text-[color:var(--muted)]">{item.institution}</p>
                </div>
                <span className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-[color:var(--muted)]">
                  {item.duration}
                </span>
              </div>
              <div className="mt-6 inline-flex rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm font-semibold">
                {item.score}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Education
