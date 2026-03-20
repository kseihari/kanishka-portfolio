import { FaGithub, FaLinkedin } from 'react-icons/fa6'

type Props = {
  className?: string
}

export function SocialLinks({ className }: Props) {
  const items = [
    {
      label: 'GitHub',
      href: 'https://github.com/',
      icon: FaGithub,
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/kanishka-seiharia',
      icon: FaLinkedin,
    },
  ] as const

  return (
    <div className={['flex items-center justify-center gap-3', className].filter(Boolean).join(' ')}>
      {items.map((it) => {
        const Icon = it.icon
        return (
          <a
            key={it.label}
            href={it.href}
            target="_blank"
            rel="noreferrer"
            aria-label={it.label}
            className="group inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/75 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/8 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70"
          >
            <Icon className="text-[18px] transition group-hover:drop-shadow-[0_0_12px_rgba(99,102,241,0.6)]" />
          </a>
        )
      })}
    </div>
  )
}

