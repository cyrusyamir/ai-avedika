export function smoothScrollTo(id: string) {
  const target = document.getElementById(id)
  if (!target) return
  const start = window.scrollY
  const targetY = target.getBoundingClientRect().top + start - 6
  const duration = 500
  const startTime = performance.now()
  const ease = (t: number) => 1 - Math.pow(1 - t, 3)
  const step = (now: number) => {
    const elapsed = now - startTime
    const progress = Math.min(elapsed / duration, 1)
    window.scrollTo(0, start + (targetY - start) * ease(progress))
    if (progress < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}
