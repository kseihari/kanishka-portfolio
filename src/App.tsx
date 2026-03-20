import './App.css'
import { AnimatePresence, motion } from 'framer-motion'
import { type FormEvent, useEffect, useMemo, useRef, useState } from 'react'
import { Navbar } from './components/Navbar'
import { AnimatedBackdrop } from './components/AnimatedBackdrop'
import { ParticlesBackground } from './components/ParticlesBackground'
import { SocialLinks } from './components/SocialLinks'
import { FaJava } from 'react-icons/fa6'
import {
  SiJavascript,
  SiDocker,
  SiGit,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiR,
  SiSqlite,
  SiSupabase,
  SiTensorflow,
  SiPytorch,
} from 'react-icons/si'

function App() {
  const titles = useMemo(
    () => ['Data Science Student', 'Machine Learning / AI Enthusiast'],
    [],
  )
  const [titleIdx, setTitleIdx] = useState(0)
  const [resumeOpen, setResumeOpen] = useState(false)

  useEffect(() => {
    const t = window.setInterval(() => {
      setTitleIdx((i) => (i + 1) % titles.length)
    }, 2600)
    return () => window.clearInterval(t)
  }, [titles.length])

  const projects = useMemo(
    () => [
      {
        title: 'Customer Churn Prediction (B2B SaaS Simulation)',
        tags: ['Python', 'Pandas', 'Scikit-learn'],
        bullets: [
          'Analyzed 20,000+ synthetic B2B customer records including usage frequency, contract size, and support tickets',
          'Built classification models (logistic regression, random forest) to predict churn with 82% accuracy',
          'Identified top churn drivers, enabling targeted retention strategies for high-value clients',
          'Visualized churn trends and feature importance to support business decision-making',
        ],
      },
      {
        title: 'Automated Data Pipeline & Reporting System',
        tags: ['Python', 'Pandas', 'SQL', 'Matplotlib', 'Seaborn'],
        bullets: [
          'Built automated pipelines to clean, validate, and merge 100,000+ rows of raw service data',
          'Designed reusable scripts to generate weekly performance and SLA compliance reports',
          'Reduced manual data processing time by 40% through automation',
          'Created visual summaries tailored for non-technical stakeholders',
        ],
      },
      {
        title: 'Workflow Automation & Notification System',
        tags: ['Python', 'Flask'],
        bullets: [
          'Developed a backend system to automate business workflow triggers and asynchronous tasks',
          'Built background job processing pipelines to handle 1,000+ events/day without blocking API requests',
          'Integrated email and webhook notifications to alert internal teams of system events',
        ],
      },
      {
        title: 'AI Course Scheduler',
        tags: ['Flask', 'React.js', 'Tailwind', 'MySQL', 'Web Scraping', 'Gemini API', 'D3.js'],
        bullets: [
          'Built an AI-driven course scheduling platform that generates preference-based semester schedules, tracking constraints, professor ratings, and timings by web scraping 1,000+ course listings.',
          'Implemented heuristic optimization with constraint satisfaction and preference learning, evaluating hundreds of combinations in seconds, reducing user planning time by ~75%, and added interactive D3.js visualizations for easier editing.',
        ],
      },
    ],
    [],
  )

  const onContactSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const name = String(form.get('name') ?? '')
    const email = String(form.get('email') ?? '')
    const message = String(form.get('message') ?? '')
    const subject = encodeURIComponent(`Portfolio contact — ${name || 'Someone'}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:kseihari@purdue.edu?subject=${subject}&body=${body}`
  }

  return (
    <>
      <AnimatedBackdrop />
      <ParticlesBackground />
      <Navbar />

      <main className="relative z-10">
        {/* Hero */}
        <section id="home" className="px-4 pt-28 sm:pt-32">
          <div className="mx-auto max-w-6xl">
            <div className="glass cardGlow relative overflow-hidden rounded-3xl px-6 py-16 sm:px-10">
              <div className="pointer-events-none absolute inset-0 opacity-70">
                <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-indigo-500/14 blur-3xl" />
                <div className="absolute -right-28 top-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
              </div>

              <div className="relative mx-auto max-w-2xl text-center">
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium tracking-wide text-white/70 ring-1 ring-white/5"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-300/80 shadow-[0_0_16px_rgba(34,211,238,0.7)]" />
                  Open to internships • Data Science • AI
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.05 }}
                  className="gradientText text-balance text-4xl font-semibold tracking-tight sm:text-6xl"
                >
                  Hi, I’m Kanishka
                </motion.h1>

                <div className="mx-auto mt-5 min-h-[32px] sm:min-h-[38px]">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={titles[titleIdx]}
                      initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
                      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                      exit={{ opacity: 0, y: -8, filter: 'blur(4px)' }}
                      transition={{ duration: 0.38 }}
                      className="text-lg font-medium text-white/75 sm:text-xl"
                    >
                      {titles[titleIdx]}
                    </motion.p>
                  </AnimatePresence>
                </div>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.12 }}
                  className="mx-auto mt-4 max-w-xl text-pretty text-sm leading-relaxed text-white/60 sm:text-base"
                >
                  I’m a Data Science student focused on building practical ML solutions — from clean datasets to
                  deployable models and polished dashboards.
                </motion.p>

                <SocialLinks className="mt-8" />

                <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <a
                    href="#projects"
                    className="ringGlow inline-flex items-center justify-center rounded-2xl bg-indigo-500/16 px-5 py-3 text-sm font-semibold text-white/90 transition hover:bg-indigo-500/22 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70"
                  >
                    View Projects
                  </a>
                  <button
                    type="button"
                    onClick={() => setResumeOpen(true)}
                    className="inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/5 px-5 py-3 text-sm font-semibold text-white/80 transition hover:bg-white/8 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70"
                  >
                    Preview Resume
                  </button>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/5 px-5 py-3 text-sm font-semibold text-white/80 transition hover:bg-white/8 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />

        {/* About */}
        <section id="about" className="px-4 py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-12">
            <div className="sm:col-span-5">
              <h2 className="text-2xl font-semibold tracking-tight text-white/90 sm:text-3xl">About</h2>
              <p className="mt-3 text-pretty text-sm leading-relaxed text-white/60 sm:text-base">
                I’m studying Data Science and love exploring how machine learning can solve real-world problems.
                I enjoy working on model training, experimentation, and turning results into clear, usable products.
              </p>
            </div>
            <div className="sm:col-span-7">
              <div className="glass cardGlow rounded-3xl p-6 sm:p-8">
                <div className="grid gap-5 sm:grid-cols-2">
                  {[
                    { k: 'Focus', v: 'ML, NLP, Computer Vision, Analytics' },
                    { k: 'Location', v: 'Chicago' },
                    { k: 'What I like', v: 'Clean pipelines, strong baselines, measurable improvements' },
                    { k: 'Current goal', v: 'Internships & impactful projects in AI/ML' },
                    { k: 'Working style', v: 'Iterate fast, validate with metrics, ship polished UI' },
                  ].map((it) => (
                    <div key={it.k} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs font-semibold tracking-wide text-white/70">{it.k}</p>
                      <p className="mt-2 text-sm leading-relaxed text-white/55">{it.v}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => setResumeOpen(true)}
                    className="ringGlow inline-flex items-center justify-center rounded-2xl bg-indigo-500/16 px-5 py-3 text-sm font-semibold text-white/90 transition hover:bg-indigo-500/22 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70"
                  >
                    Preview Resume
                  </button>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/5 px-5 py-3 text-sm font-semibold text-white/80 transition hover:bg-white/8 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="flex items-end justify-between gap-6">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-white/90 sm:text-3xl">Projects</h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">
                  Selected work across ML, data pipelines, and backend automation.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((p) => (
                <article
                  key={p.title}
                  className="glass cardGlow group relative overflow-hidden rounded-3xl p-6 transition hover:-translate-y-1 hover:border-white/16"
                >
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute -left-20 top-10 h-60 w-60 rounded-full bg-indigo-500/12 blur-3xl" />
                    <div className="absolute -right-24 top-24 h-60 w-60 rounded-full bg-cyan-400/10 blur-3xl" />
                  </div>

                  <div className="relative">
                    <p className="text-base font-semibold text-white/90">{p.title}</p>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-white/55">
                      {p.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/65"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section id="tech" className="px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-semibold tracking-tight text-white/90 sm:text-3xl">Tech Stack</h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">
              Tools I enjoy using for data, modeling, and building polished interfaces.
            </p>

            <TechGrid />
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="px-4 pb-20 pt-16 sm:pb-28 sm:pt-20">
          <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-12">
            <div className="sm:col-span-5">
              <h2 className="text-2xl font-semibold tracking-tight text-white/90 sm:text-3xl">Contact</h2>
              <p className="mt-3 text-pretty text-sm leading-relaxed text-white/60 sm:text-base">
                Have a project idea, internship opportunity, or want to collaborate? Send a message and I’ll get
                back to you.
              </p>
              <SocialLinks className="mt-6 justify-start" />
            </div>

            <div className="sm:col-span-7">
              <form onSubmit={onContactSubmit} className="glass rounded-3xl p-6 sm:p-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2">
                    <span className="text-xs font-semibold tracking-wide text-white/70">Name</span>
                    <input
                      name="name"
                      required
                      className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-white/85 outline-none transition placeholder:text-white/30 focus:border-indigo-400/45 focus:ring-2 focus:ring-indigo-400/25"
                      placeholder="Your name"
                    />
                  </label>
                  <label className="grid gap-2">
                    <span className="text-xs font-semibold tracking-wide text-white/70">Email</span>
                    <input
                      name="email"
                      type="email"
                      required
                      className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-white/85 outline-none transition placeholder:text-white/30 focus:border-indigo-400/45 focus:ring-2 focus:ring-indigo-400/25"
                      placeholder="you@example.com"
                    />
                  </label>
                </div>

                <label className="mt-4 grid gap-2">
                  <span className="text-xs font-semibold tracking-wide text-white/70">Message</span>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="resize-none rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-white/85 outline-none transition placeholder:text-white/30 focus:border-indigo-400/45 focus:ring-2 focus:ring-indigo-400/25"
                    placeholder="Tell me a bit about what you’re working on..."
                  />
                </label>

                <div className="mt-6 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
                  <button
                    type="submit"
                    className="ringGlow inline-flex items-center justify-center rounded-2xl bg-indigo-500/16 px-5 py-3 text-sm font-semibold text-white/90 transition hover:bg-indigo-500/22 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        <footer className="px-4 pb-10">
          <div className="mx-auto max-w-6xl border-t border-white/10 pt-8 text-center text-xs text-white/40">
            © {new Date().getFullYear()} Kanishka • Built with React + Vite
          </div>
        </footer>
      </main>
    </>
  )
}

function TechGrid() {
  const items = [
    { name: 'Python', icon: SiPython },
    { name: 'TensorFlow', icon: SiTensorflow },
    { name: 'PyTorch', icon: SiPytorch },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'React', icon: SiReact },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'SQL', icon: SiSqlite },
    { name: 'Supabase', icon: SiSupabase },
    { name: 'Docker', icon: SiDocker },
    { name: 'Git', icon: SiGit },
    { name: 'Java', icon: FaJava },
    { name: 'R', icon: SiR },
  ] as const

  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((it) => (
        <div key={it.name} className="glass cardGlow rounded-3xl p-6">
          <div className="flex items-center gap-3">
            <div className="floaty flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-lg">
              <it.icon className="text-[20px] text-white/80" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white/85">{it.name}</p>
              <p className="text-xs text-white/50">Core tool</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function ResumeModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const closeBtnRef = useRef<HTMLButtonElement | null>(null)
  const dialogRef = useRef<HTMLDivElement | null>(null)
  const previouslyFocusedRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!open) return

    previouslyFocusedRef.current =
      (document.activeElement instanceof HTMLElement ? document.activeElement : null) ?? null

    // Prevent background scroll while the modal is open.
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
        return
      }

      // Basic focus trap to keep tab focus inside the dialog.
      if (e.key === 'Tab') {
        const root = dialogRef.current
        if (!root) return

        const focusable = root.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
        )
        const list = Array.from(focusable).filter((el) => !el.hasAttribute('disabled'))
        if (list.length === 0) return

        const first = list[0]
        const last = list[list.length - 1]
        const active = document.activeElement

        if (!e.shiftKey && active === last) {
          e.preventDefault()
          first.focus()
        } else if (e.shiftKey && (active === first || !root.contains(active))) {
          e.preventDefault()
          last.focus()
        }
      }
    }
    window.addEventListener('keydown', onKey)

    // Focus the close button for accessibility.
    closeBtnRef.current?.focus()

    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKey)
      previouslyFocusedRef.current?.focus?.()
    }
  }, [open, onClose])

  if (!open) return null

  // Best-effort: hide built-in PDF UI controls where supported.
  const pdfUrl = '/resume.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH'
  const titleId = 'resume-modal-title'

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4 py-10"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" aria-hidden="true" />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="glass relative w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10"
      >
        <div className="flex items-center justify-between border-b border-white/10 bg-black/25 px-5 py-4">
          <p id={titleId} className="text-sm font-semibold text-white/80">
            Resume Preview
          </p>
          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white/70 transition hover:bg-white/8 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70"
          >
            Close
          </button>
        </div>
        <div className="h-[75vh] min-h-[520px] bg-black/20">
          <iframe
            title="Resume Preview"
            aria-label="Resume PDF preview"
            src={pdfUrl}
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  )
}

export default App
