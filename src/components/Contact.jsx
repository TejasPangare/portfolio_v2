import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi'

const initialForm = {
  name: '',
  email: '',
  message: '',
}

function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((currentForm) => ({ ...currentForm, [name]: value }))
    setSubmitted(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const nextErrors = {}
    if (!form.name.trim()) nextErrors.name = 'Please enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = 'Enter a valid email.'
    if (form.message.trim().length < 12) nextErrors.message = 'Message should be at least 12 characters.'

    setErrors(nextErrors)

    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true)
      setForm(initialForm)
    }
  }

  const contactItems = [
    { icon: FiMail, label: 'Email', value: 'tejas@example.com', href: 'mailto:tejas@example.com' },
    { icon: FiPhone, label: 'Phone', value: '+91 98765 43210', href: 'tel:+919876543210' },
    { icon: FiLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/tejas', href: 'https://linkedin.com/' },
    { icon: FiGithub, label: 'GitHub', value: 'github.com/tejas', href: 'https://github.com/' },
  ]

  return (
    <section id="contact" className="section-shell py-14 sm:py-20">
      <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-300">Contact</p>
          <h2 className="section-title mt-4">Let’s build something clean, useful, and memorable.</h2>
          <p className="section-copy">
            Whether it’s a role, a collaboration, or a product idea, I’m always open to good
            conversations about design-minded engineering and modern web experiences.
          </p>

          <div className="mt-8 grid gap-4">
            {contactItems.map((item) => {
              const Icon = item.icon
              const external = item.label === 'LinkedIn' || item.label === 'GitHub'

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noreferrer' : undefined}
                  className="glass-panel flex items-center gap-4 rounded-[1.5rem] p-4 transition hover:translate-x-2"
                >
                  <div className="rounded-2xl bg-white/8 p-3 text-sky-300">
                    <Icon />
                  </div>
                  <div>
                    <div className="text-sm text-[color:var(--muted)]">{item.label}</div>
                    <div className="mt-1 font-semibold">{item.value}</div>
                  </div>
                </a>
              )
            })}
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="glass-panel rounded-[2rem] p-6 sm:p-8"
        >
          <div className="grid gap-5">
            <label className="grid gap-2">
              <span className="text-sm font-medium">Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3 outline-none transition focus:border-sky-300/50"
                placeholder="Your name"
              />
              {errors.name ? <span className="text-sm text-amber-300">{errors.name}</span> : null}
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-medium">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3 outline-none transition focus:border-sky-300/50"
                placeholder="you@example.com"
              />
              {errors.email ? <span className="text-sm text-amber-300">{errors.email}</span> : null}
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-medium">Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="6"
                className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3 outline-none transition focus:border-sky-300/50"
                placeholder="Tell me about the opportunity or project."
              />
              {errors.message ? <span className="text-sm text-amber-300">{errors.message}</span> : null}
            </label>
            <button
              type="submit"
              className="rounded-full bg-[color:var(--accent-strong)] px-6 py-3 font-semibold text-slate-950 transition hover:translate-y-[-2px]"
            >
              Send Message
            </button>
            {submitted ? (
              <p className="text-sm text-emerald-300">
                Message validated successfully. Hook this form to EmailJS, Formspree, or your preferred service when you are ready.
              </p>
            ) : null}
          </div>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact
