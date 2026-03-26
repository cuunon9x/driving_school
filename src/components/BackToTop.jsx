import { useState, useEffect } from 'react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTop = () => {
    const start = window.scrollY
    const duration = 600 // ms
    const startTime = performance.now()

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3)

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      window.scrollTo(0, start * (1 - easeOutCubic(progress)))
      if (progress < 1) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }

  return (
    <button
      onClick={scrollTop}
      aria-label="Về đầu trang"
      className={`fixed bottom-24 left-1/2 -translate-x-1/2 z-50 w-10 h-10 bg-white border border-gray-200 rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:scale-110 hover:shadow-xl transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'
      }`}
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
      </svg>
    </button>
  )
}
