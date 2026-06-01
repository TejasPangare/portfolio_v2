import { AnimatePresence, motion } from 'framer-motion'

function TechnologyPopup({ technology, position, onClose }) {
  return (
    <AnimatePresence>
      {technology ? (
        <>
          <motion.button
            key="overlay"
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="overlay-scrim fixed inset-0 z-[60] backdrop-blur-[2px]"
            aria-label="Close technology details"
          />
          <motion.div
            key={technology.id}
            initial={{ opacity: 0, scale: 0.94, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 18 }}
            transition={{ duration: 0.22 }}
            style={{
              left: `${position.x}px`,
              top: `${position.y}px`,
            }}
            className="glass-panel fixed inset-x-4 bottom-4 z-[70] max-h-[calc(100vh-2rem)] overflow-y-auto rounded-[1.8rem] p-5 text-left md:inset-x-auto md:bottom-auto md:w-[24rem]"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="section-eyebrow text-xs uppercase tracking-[0.24em]">{technology.category}</p>
                <h3 className="mt-2 font-display text-2xl font-bold">{technology.name}</h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="surface-pill shrink-0 rounded-full px-3 py-1 text-sm"
              >
                Close
              </button>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
              <div className="surface-card rounded-2xl p-3">
                <div className="text-[color:var(--muted)]">Proficiency</div>
                <div className="mt-2 font-semibold">{technology.proficiency}</div>
              </div>
              <div className="surface-card rounded-2xl p-3">
                <div className="text-[color:var(--muted)]">Experience</div>
                <div className="mt-2 font-semibold">{technology.experience}</div>
              </div>
              <div className="surface-card rounded-2xl p-3">
                <div className="text-[color:var(--muted)]">Projects</div>
                <div className="mt-2 font-semibold">{technology.projectCount}</div>
              </div>
              <div className="surface-card rounded-2xl p-3">
                <div className="text-[color:var(--muted)]">Use cases</div>
                <div className="mt-2 font-semibold">{technology.usage.length}</div>
              </div>
            </div>

            <div className="mt-5">
              <p className="text-sm font-semibold">Used for</p>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-[color:var(--muted)]">
                {technology.usage.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="surface-card mt-5 rounded-2xl p-4 text-sm leading-6 text-[color:var(--muted)]">
              {technology.notes}
            </div>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  )
}

export default TechnologyPopup
