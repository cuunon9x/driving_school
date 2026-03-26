const links = [
  { label: 'Trang Chủ', href: '#hero' },
  { label: 'Tại Sao Chọn FOX', href: '#why' },
  { label: 'Khóa Học', href: '#courses' },
  { label: 'Về Chúng Tôi', href: '#about' },
  { label: 'Liên Hệ', href: '#contact' },
]

export default function Footer() {
  const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="bg-gray-900 text-gray-400 pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-9 h-9 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">FOX</span>
              </div>
              <span className="font-bold text-white text-lg">Lái Xe FOX</span>
            </div>
            <p className="text-sm leading-relaxed">
              Trung tâm đào tạo lái xe uy tín tại TP. Hồ Chí Minh. Được cấp phép bởi Bộ Công An.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Điều Hướng</h4>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.href}>
                  <button onClick={() => scrollTo(l.href)} className="text-sm hover:text-white transition-colors">
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Kết Nối</h4>
            <div className="flex gap-3 mb-4">
              <a
                href="https://facebook.com"
                target="_blank" rel="noreferrer"
                className="w-9 h-9 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors text-sm"
                aria-label="Facebook"
              >f</a>
              <a
                href="https://zalo.me"
                target="_blank" rel="noreferrer"
                className="w-9 h-9 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors text-xs font-bold"
                aria-label="Zalo"
              >Z</a>
            </div>
            <p className="text-xs">📞 Hotline: <a href="tel:0909123456" className="text-white hover:text-primary">0909 123 456</a></p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-xs text-center">
          © {new Date().getFullYear()} Trung tâm đào tạo lái xe FOX. Tất cả quyền được bảo lưu.
        </div>
      </div>
    </footer>
  )
}
