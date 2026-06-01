import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { projectFilters, projects } from '../data/projects'

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return projects
    }

    return projects.filter((project) => project.category === activeFilter)
  }, [activeFilter])

  return (
    <section id="projects" className="section-shell py-14 sm:py-20">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-300">Projects</p>
          <h2 className="section-title mt-4">Selected work across UI, backend, and AI product ideas.</h2>
          <p className="section-copy">
            These projects reflect how I approach problem solving, presentation quality, and modern
            app delivery from prototype to polished interaction.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {projectFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-4 py-2 text-sm transition ${
                activeFilter === filter
                  ? 'bg-[color:var(--accent-strong)] text-slate-950'
                  : 'border border-white/10 bg-white/6 text-[color:var(--muted)] hover:text-[color:var(--text)]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="mt-10 grid gap-6 lg:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.article
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35 }}
              className="glass-panel group overflow-hidden rounded-[2rem]"
            >
              <div className={`relative h-56 bg-gradient-to-br ${project.cover.accent} p-6`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.25),transparent_35%)]" />
                <div className="relative flex h-full items-end justify-between rounded-[1.5rem] border border-white/15 bg-slate-950/20 p-6">
                  <div>
                    <div className="text-xs uppercase tracking-[0.28em] text-white/70">{project.category}</div>
                    <div className="mt-3 font-display text-2xl font-bold text-white">{project.cover.label}</div>
                  </div>
                  <div className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/80">
                    Preview
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <h3 className="font-display text-2xl font-bold">{project.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[color:var(--muted)] sm:text-base">
                  {project.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/6 px-3 py-2 text-xs uppercase tracking-[0.18em]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm font-semibold transition group-hover:translate-x-1"
                  >
                    <FiGithub />
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[color:var(--accent-strong)] px-4 py-2 text-sm font-semibold text-slate-950 transition hover:translate-x-1"
                  >
                    <FiExternalLink />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}

export default Projects
