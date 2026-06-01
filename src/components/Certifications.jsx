import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import { certifications } from '../data/certifications'

function Certifications() {
  return (
    <section id="certifications" className="section-shell py-14 sm:py-20">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-300">Certifications</p>
      <h2 className="section-title mt-4">Credentials that reinforce my foundation and curiosity.</h2>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {certifications.map((certification, index) => (
          <motion.a
            key={certification.title}
            href={certification.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="glass-panel rounded-[2rem] p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm text-[color:var(--muted)]">{certification.issuer}</p>
                <h3 className="mt-3 font-display text-xl font-bold">{certification.title}</h3>
              </div>
              <FiArrowUpRight className="text-lg text-sky-300" />
            </div>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-sm text-[color:var(--muted)]">
              Issued {certification.date}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}

export default Certifications
