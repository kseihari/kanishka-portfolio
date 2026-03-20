import { useEffect, useMemo, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import type { Engine, ISourceOptions } from '@tsparticles/engine'
import { loadSlim } from '@tsparticles/slim'

export function ParticlesBackground() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine)
    }).then(() => setReady(true))
  }, [])

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: true, zIndex: 0 },
      background: { color: { value: 'transparent' } },
      fpsLimit: 60,
      detectRetina: true,
      particles: {
        number: { value: 52, density: { enable: true, width: 1200, height: 800 } },
        color: { value: 'rgba(226, 232, 240, 0.9)' },
        shape: { type: 'circle' },
        opacity: { value: { min: 0.12, max: 0.35 } },
        size: { value: { min: 1, max: 2.2 } },
        links: {
          enable: true,
          distance: 140,
          color: 'rgba(148, 163, 184, 0.45)',
          opacity: 0.25,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.55,
          direction: 'none',
          outModes: { default: 'out' },
        },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: 'grab' },
          resize: { enable: true },
        },
        modes: {
          grab: { distance: 160, links: { opacity: 0.35 } },
        },
      },
    }),
    [],
  )

  if (!ready) return null
  return <Particles id="tsparticles" options={options} />
}

