import { useState, useEffect } from 'react'

const slides = [
  {
    url: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1600&q=80',
    caption: 'Học lái xe an toàn, chuyên nghiệp',
  },
  {
    url: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1600&q=80',
    caption: 'Giáo viên tận tâm, xe hiện đại',
  },
  {
    url: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1600&q=80',
    caption: 'Tỷ lệ đậu 98% ngay lần đầu',
  },
  {
    url: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1600&q=80',
    caption: 'Lịch học linh hoạt sáng – chiều – tối',
  },
]

const stats = [
  { value: '5.000+', label: 'Học viên đã tốt nghiệp' },
  { value: '98%', label: 'Tỷ lệ thi đậu' },
  { value: '10+', label: 'Năm kinh nghiệm' },
  { value: '50+', label: 'Huấn luyện viên chuyên nghiệp' },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(true)

  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  // Auto-advance every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setAnimating(false)
      setTimeout(() => {
        setCurrent((p) => (p + 1) % slides.length)
        setAnimating(true)
      }, 50)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  const goTo = (i) => {
    setAnimating(false)
    setTimeout(() => { setCurrent(i); setAnimating(true) }, 50)
  }

  const prev = () => goTo((current - 1 + slides.length) % slides.length)
  const next = () => goTo((current + 1) % slides.length)

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">

      {/* ── Background slider ── */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{
            backgroundImage: `url(${s.url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: i === current ? 1 : 0,
            zIndex: 0,
          }}
        />
      ))}

      {/* Dark + blue gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-primary/70 to-blue-800/75 z-10" />

      {/* Slide arrows */}
      <button
        onClick={prev}
        className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full items-center justify-center text-white transition-all duration-200 hover:scale-110"
        aria-label="Previous"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button
        onClick={next}
        className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full items-center justify-center text-white transition-all duration-200 hover:scale-110"
        aria-label="Next"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-20 pt-24 pb-16 relative z-20 w-full">
        <div className="max-w-2xl">
          <span
            className={`hero-badge inline-block bg-white/20 text-white text-sm font-medium px-4 py-1 rounded-full mb-4 transition-all duration-700 ${animating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
          >
            🚗 {slides[current].caption}
          </span>
          <h1 className="hero-title text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
            Trung Tâm<br />
            Đào Tạo Lái Xe<br />
            <span className="text-yellow-300">FOX</span>
          </h1>
          <p className="hero-sub text-blue-100 text-lg md:text-xl mb-8 leading-relaxed">
            Đào tạo lái xe chuyên nghiệp, bài bản. Học phí hợp lý, giáo viên tận tâm.
            Cấp bằng hạng A1, A2, B1, B2, C tại TP. Hồ Chí Minh.
          </p>
          <div className="hero-cta flex flex-wrap gap-3">
            <button
              onClick={() => scrollTo('#courses')}
              className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-bold hover:bg-yellow-300 hover:scale-105 active:scale-95 transition-all duration-200 text-sm md:text-base shadow-lg shadow-yellow-400/30"
            >
              Xem Khóa Học
            </button>
            <button
              onClick={() => scrollTo('#contact')}
              className="bg-white/20 text-white border border-white/40 px-6 py-3 rounded-full font-semibold hover:bg-white/30 hover:scale-105 active:scale-95 transition-all duration-200 text-sm md:text-base"
            >
              Liên Hệ Ngay
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="hero-stats grid grid-cols-2 md:grid-cols-4 gap-4 mt-14">
          {stats.map((s) => (
            <div key={s.label} className="bg-white/15 backdrop-blur-sm rounded-2xl p-4 text-center hover:bg-white/25 transition-colors duration-300">
              <div className="stat-num text-2xl md:text-3xl font-extrabold text-yellow-300">{s.value}</div>
              <div className="text-blue-100 text-xs md:text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`transition-all duration-300 rounded-full ${
                i === current ? 'w-8 h-2.5 bg-yellow-400' : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

