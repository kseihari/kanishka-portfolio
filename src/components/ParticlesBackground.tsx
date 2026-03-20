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
        number: { value: 92, density: { enable: true, width: 1600, height: 1000 } },
        color: { value: 'rgba(147, 197, 253, 0.9)' },
        shape: { type: 'circle' },
        opacity: { value: { min: 0.24, max: 0.64 } },
        size: { value: { min: 1.2, max: 3.0 } },
        links: {
          enable: true,
          distance: 220,
          color: 'rgba(99, 102, 241, 0.75)',
          opacity: 0.55,
          width: 1.45,
        },
        move: {
          enable: true,
          speed: 1.08,
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
          grab: { distance: 260, links: { opacity: 0.58 } },
        },
      },
    }),
    [],
  )

  if (!ready) return null
  return <Particles id="tsparticles" options={options} />
}

