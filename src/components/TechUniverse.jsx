import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaCss3Alt,
  FaDatabase,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaPython,
  FaReact,
} from 'react-icons/fa'
import {
  SiFastapi,
  SiFirebase,
  SiJavascript,
  SiOpenai,
  SiPostgresql,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'
import { technologies } from '../data/technologies'
import TechnologyPopup from './TechnologyPopup'

const iconMap = {
  FaReact,
  SiJavascript,
  SiTypescript,
  FaHtml5,
  FaCss3Alt,
  SiTailwindcss,
  FaPython,
  SiFastapi,
  SiSpringboot,
  FaJava,
  FaDatabase,
  SiPostgresql,
  FaGitAlt,
  FaDocker,
  SiFirebase,
  SiOpenai,
}

const orbitPositions = [
  { x: 8, y: 18 },
  { x: 22, y: 40 },
  { x: 16, y: 68 },
  { x: 34, y: 20 },
  { x: 38, y: 60 },
  { x: 52, y: 30 },
  { x: 58, y: 70 },
  { x: 68, y: 16 },
  { x: 72, y: 48 },
  { x: 84, y: 26 },
  { x: 86, y: 66 },
  { x: 48, y: 82 },
  { x: 6, y: 86 },
  { x: 92, y: 84 },
  { x: 27, y: 84 },
  { x: 66, y: 88 },
  { x: 50, y: 10 },
]

function TechUniverse() {
  const [selectedTechnology, setSelectedTechnology] = useState(null)
  const [popupPosition, setPopupPosition] = useState({ x: 16, y: 16 })

  const positionedTechnologies = useMemo(
    () =>
      technologies.map((technology, index) => ({
        ...technology,
        position: orbitPositions[index % orbitPositions.length],
      })),
    [],
  )

  const connections = useMemo(() => {
    return positionedTechnologies.flatMap((technology) =>
      technology.relatedTo
        .map((relatedName) => {
          const target = positionedTechnologies.find((item) => item.name === relatedName)
          if (!target || technology.id > target.id) {
            return null
          }

          return {
            id: `${technology.id}-${target.id}`,
            source: technology.position,
            target: target.position,
          }
        })
        .filter(Boolean),
    )
  }, [positionedTechnologies])

  const handleSelect = (technology, event) => {
    const targetRect = event.currentTarget.getBoundingClientRect()
    const desktopWidth = 384
    const desktopHeight = 520
    const padding = 16
    const isDesktop = window.innerWidth >= 768

    if (isDesktop) {
      const desiredX = targetRect.left + targetRect.width / 2 - desktopWidth / 2
      const roomBelow = window.innerHeight - targetRect.bottom
      const desiredY =
        roomBelow > desktopHeight + padding
          ? targetRect.bottom + 12
          : targetRect.top - desktopHeight - 12

      const clampedX = Math.min(
        Math.max(desiredX, padding),
        window.innerWidth - desktopWidth - padding,
      )
      const clampedY = Math.min(
        Math.max(desiredY, padding),
        window.innerHeight - desktopHeight - padding,
      )

      setPopupPosition({ x: clampedX, y: clampedY })
    } else {
      setPopupPosition({ x: 16, y: 16 })
    }

    setSelectedTechnology(technology)
  }

  return (
    <section id="skills" className="section-shell py-14 sm:py-20">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-300">Tech Stack Universe</p>
      <h2 className="section-title mt-4">An interactive map of the tools I use to ship products.</h2>
      <p className="section-copy">
        Explore the stack behind my work, from polished frontend delivery to backend systems and AI integrations.
      </p>

      <div className="relative mt-10 md:hidden">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {technologies.map((technology) => {
            const Icon = iconMap[technology.icon]

            return (
              <button
                key={technology.id}
                type="button"
                onClick={(event) => handleSelect(technology, event)}
                className="glass-panel flex min-h-24 flex-col items-center justify-center gap-3 rounded-[1.6rem] p-4 text-center"
              >
                <span className="text-3xl text-sky-300">
                  <Icon />
                </span>
                <span className="text-sm font-semibold">{technology.name}</span>
              </button>
            )
          })}
        </div>
      </div>

      <div className="relative mt-12 hidden h-[44rem] md:block">
        <div className="glass-panel absolute inset-0 overflow-hidden rounded-[2.4rem] border border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.12),transparent_45%)]" />
          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/8" />
          <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/6" />
          <svg className="absolute inset-0 h-full w-full opacity-45" preserveAspectRatio="none">
            {connections.map((line) => (
              <line
                key={line.id}
                x1={`${line.source.x}%`}
                y1={`${line.source.y}%`}
                x2={`${line.target.x}%`}
                y2={`${line.target.y}%`}
                stroke="rgba(125, 211, 252, 0.28)"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
              />
            ))}
          </svg>

          {positionedTechnologies.map((technology, index) => {
            const Icon = iconMap[technology.icon]

            return (
              <motion.button
                key={technology.id}
                type="button"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.14 }}
                animate={{ y: [0, -14 - (index % 3) * 4, 0] }}
                transition={{
                  opacity: { duration: 0.35, delay: index * 0.03 },
                  scale: { duration: 0.2 },
                  y: {
                    duration: 4 + (index % 4),
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
                }}
                onClick={(event) => handleSelect(technology, event)}
                style={{ left: `${technology.position.x}%`, top: `${technology.position.y}%` }}
                className="tech-orb absolute z-10 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-white/12 bg-[color:var(--surface-strong)] text-2xl transition hover:shadow-[0_0_30px_rgba(56,189,248,0.28)]"
                aria-label={technology.name}
                title={technology.name}
              >
                <Icon />
              </motion.button>
            )
          })}
        </div>
      </div>

      <TechnologyPopup
        technology={selectedTechnology}
        position={popupPosition}
        onClose={() => setSelectedTechnology(null)}
      />
    </section>
  )
}

export default TechUniverse
