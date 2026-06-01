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
          <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.24em]">Contact</p>
          <h2 className="section-title mt-4">Let&apos;s build something clean, useful, and memorable.</h2>
          <p className="section-copy">
            Whether it&apos;s a role, a collaboration, or a product idea, I&apos;m always open to good
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
                  <div className="accent-icon rounded-2xl p-3">
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
                className="input-surface rounded-2xl px-4 py-3 outline-none transition"
                placeholder="Your name"
              />
              {errors.name ? <span className="error-text text-sm">{errors.name}</span> : null}
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-medium">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="input-surface rounded-2xl px-4 py-3 outline-none transition"
                placeholder="you@example.com"
              />
              {errors.email ? <span className="error-text text-sm">{errors.email}</span> : null}
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-medium">Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="6"
                className="input-surface rounded-2xl px-4 py-3 outline-none transition"
                placeholder="Tell me about the opportunity or project."
              />
              {errors.message ? <span className="error-text text-sm">{errors.message}</span> : null}
            </label>
            <button
              type="submit"
              className="rounded-full bg-[color:var(--accent-strong)] px-6 py-3 font-semibold text-slate-950 transition hover:translate-y-[-2px]"
            >
              Send Message
            </button>
            {submitted ? (
              <p className="success-text text-sm">
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
