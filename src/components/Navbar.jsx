import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Trang Chủ', href: '#hero', id: 'hero' },
  { label: 'Tại Sao Chọn FOX', href: '#why', id: 'why' },
  { label: 'Khóa Học', href: '#courses', id: 'courses' },
  { label: 'Về Chúng Tôi', href: '#about', id: 'about' },
  { label: 'Liên Hệ', href: '#contact', id: 'contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observers = navLinks.map(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { threshold: 0.25 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach((o) => o?.disconnect())
  }, [])

  const handleLink = (href) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/90'}`}>
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => handleLink('#hero')} className="flex items-center gap-2 focus:outline-none">
          <div className="w-9 h-9 bg-primary rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">FOX</span>
          </div>
          <span className="font-bold text-primary text-lg leading-tight">
            Lái Xe FOX<br />
            <span className="text-xs text-gray-500 font-normal">TP. Hồ Chí Minh</span>
          </span>
        </button>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => handleLink(l.href)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  active === l.id
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-gray-600 hover:bg-primary-light hover:text-primary'
                }`}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={() => handleLink('#contact')}
          className="hidden lg:inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-primary-dark transition-colors"
        >
          Đăng Ký Ngay
        </button>

        {/* Hamburger */}
        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 focus:outline-none" aria-label="menu">
          <span className={`block w-6 h-0.5 bg-gray-700 mb-1.5 transition-transform ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-gray-700 mb-1.5 transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-gray-700 transition-transform ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu — always rendered, animated with max-height + opacity */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t px-4 py-3 space-y-1 shadow-lg">
          {navLinks.map((l, i) => (
            <button
              key={l.href}
              onClick={() => handleLink(l.href)}
              style={{ transitionDelay: open ? `${i * 40}ms` : '0ms' }}
              className={`block w-full text-left py-2.5 px-3 rounded-lg font-medium transition-all duration-200 transform ${
                open ? 'translate-x-0 opacity-100' : '-translate-x-3 opacity-0'
              } ${
                active === l.id
                  ? 'bg-primary text-white'
                  : 'text-gray-700 hover:bg-primary-light hover:text-primary'
              }`}
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => handleLink('#contact')}
            style={{ transitionDelay: open ? `${navLinks.length * 40}ms` : '0ms' }}
            className={`w-full bg-primary text-white py-2.5 rounded-full font-semibold mt-2 hover:bg-primary-dark transition-all duration-200 transform ${
              open ? 'translate-x-0 opacity-100' : '-translate-x-3 opacity-0'
            }`}
          >
            Đăng Ký Ngay
          </button>
        </div>
      </div>
    </nav>
  )
}
