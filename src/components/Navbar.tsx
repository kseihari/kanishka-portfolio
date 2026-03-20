import { type MouseEvent, useEffect, useMemo, useState } from 'react'

type NavItem = { id: string; label: string }

export function Navbar() {
  const items = useMemo<NavItem[]>(
    () => [
      { id: 'home', label: 'Home' },
      { id: 'about', label: 'About' },
      { id: 'projects', label: 'Projects' },
      { id: 'tech', label: 'Tech Stack' },
      { id: 'contact', label: 'Contact' },
    ],
    [],
  )

  const [activeId, setActiveId] = useState<string>('home')

  useEffect(() => {
    const sections = items
      .map((it) => document.getElementById(it.id))
      .filter((el): el is HTMLElement => Boolean(el))

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0]
        if (visible?.target?.id) setActiveId(visible.target.id)
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: [0.1, 0.2, 0.35, 0.5] },
    )

    for (const el of sections) observer.observe(el)
    return () => observer.disconnect()
  }, [items])

  const onNav = (id: string) => (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    history.replaceState(null, '', `#${id}`)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mt-3 flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 px-4 py-3 backdrop-blur-xl ring-1 ring-white/5">
          <a
            href="#home"
            onClick={onNav('home')}
            className="group inline-flex items-center gap-2 rounded-xl px-2 py-1 text-sm font-semibold tracking-wide text-white/90 transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70"
          >
            <span className="h-2 w-2 rounded-full bg-indigo-400/80 shadow-[0_0_18px_rgba(99,102,241,0.65)]" />
            <span className="opacity-90 group-hover:opacity-100">Kanishka</span>
          </a>

          <nav className="hidden items-center gap-1 sm:flex">
            {items.map((it) => {
              const active = it.id === activeId
              return (
                <a
                  key={it.id}
                  href={`#${it.id}`}
                  onClick={onNav(it.id)}
                  className={[
                    'rounded-xl px-3 py-2 text-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70',
                    active
                      ? 'bg-white/5 text-white ring-1 ring-white/10'
                      : 'text-white/70 hover:bg-white/5 hover:text-white',
                  ].join(' ')}
                >
                  {it.label}
                </a>
              )
            })}
          </nav>

          <a
            href="#contact"
            onClick={onNav('contact')}
            className="inline-flex items-center rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-white/85 transition hover:bg-white/8 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70"
          >
            Let’s talk
          </a>
        </div>
      </div>
    </header>
  )
}

