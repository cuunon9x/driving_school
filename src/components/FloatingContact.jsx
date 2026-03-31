import { useState } from 'react'

const buttons = [
  {
    key: 'phone',
    label: 'Gọi ngay',
    href: 'tel:0909123456',
    bg: 'bg-green-500 hover:bg-green-600',
    pulse: 'rgba(34,197,94,0.5)',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372a2.25 2.25 0 00-1.521-2.138l-3.5-1.167a2.25 2.25 0 00-2.476.75l-.375.5a13.493 13.493 0 01-6.375-6.375l.5-.375a2.25 2.25 0 00.75-2.476l-1.167-3.5A2.25 2.25 0 007.622 2H6.25A2.25 2.25 0 004 4.25v.5C4 6.085 3.75 6.75 3 6.75H2.25z" />
      </svg>
    ),
  },
  {
    key: 'zalo',
    label: 'Chat Zalo',
    href: 'https://zalo.me/0909123456',
    bg: 'bg-blue-500 hover:bg-blue-600',
    pulse: 'rgba(59,130,246,0.5)',
    icon: (
      <span className="text-white font-extrabold text-base leading-none">Zalo</span>
    ),
  },
  {
    key: 'facebook',
    label: 'Facebook',
    href: 'https://facebook.com/laixefox',
    bg: 'bg-[#1877F2] hover:bg-[#0f5ecc]',
    pulse: 'rgba(24,119,242,0.5)',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
      </svg>
    ),
  },
]

export default function FloatingContact() {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3 floating-bar">
      {/* Action buttons */}
      <div className={`flex flex-col items-end gap-3 transition-all duration-400 ${expanded ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
        {buttons.map((b) => (
          <a
            key={b.key}
            href={b.href}
            target={b.key !== 'phone' ? '_blank' : undefined}
            rel="noreferrer"
            className={`flex items-center gap-2 ${b.bg} text-white px-4 py-2.5 rounded-full shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl`}
          >
            <span className="flex items-center justify-center w-6 h-6">{b.icon}</span>
            <span className="text-sm font-semibold whitespace-nowrap">{b.label}</span>
          </a>
        ))}
      </div>

      {/* Toggle button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="float-bob sm:w-20 sm:h-20 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white shadow-lg hover:bg-primary-dark transition-colors pulse-ring"
        aria-label="Liên hệ"
      >
        <span className={`transition-transform duration-300 ${expanded ? 'rotate-45' : ''}`}>
          {expanded ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
            </svg>
          )}
        </span>
      </button>
    </div>
  )
}
