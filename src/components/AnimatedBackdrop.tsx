export function AnimatedBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10"
    >
      <div className="animated-orbs" />
      <div className="animated-grid" />
      <div className="animated-scanlines" />
      <div className="animated-vignette" />
    </div>
  )
}

