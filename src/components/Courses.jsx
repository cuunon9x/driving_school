import useInView from '../hooks/useInView'

const courses = [
  {
    badge: 'Phổ biến',
    badgeColor: 'bg-yellow-400 text-gray-900',
    icon: '🛵',
    title: 'Hạng A1',
    subtitle: 'Xe máy dưới 175cc',
    duration: '6 buổi học',
    features: ['Lý thuyết luật giao thông', 'Thực hành sa hình', 'Thi sát hạch cấp bằng', 'Hỗ trợ thi lại nếu rớt'],
    price: '1.200.000',
    highlight: false,
  },
  {
    badge: 'Nhiều yêu cầu',
    badgeColor: 'bg-blue-100 text-blue-700',
    icon: '🏍️',
    title: 'Hạng A2',
    subtitle: 'Xe moto phân khối lớn',
    duration: '8 buổi học',
    features: ['Lý thuyết nâng cao', 'Thực hành đường trường', 'Thi sát hạch cấp bằng', 'Hỗ trợ thi lại nếu rớt'],
    price: '1.800.000',
    highlight: false,
  },
  {
    badge: 'Hot',
    badgeColor: 'bg-red-100 text-red-600',
    icon: '🚗',
    title: 'Hạng B1',
    subtitle: 'Ô tô không kinh doanh vận tải',
    duration: '16 buổi học',
    features: ['Lý thuyết + thi lý thuyết', 'Thực hành trên xe số', 'Sa hình + đường trường', 'Hỗ trợ thi lại miễn phí'],
    price: '7.500.000',
    highlight: true,
  },
  {
    badge: 'Được chọn nhất',
    badgeColor: 'bg-green-100 text-green-700',
    icon: '🚙',
    title: 'Hạng B2',
    subtitle: 'Ô tô kinh doanh vận tải',
    duration: '20 buổi học',
    features: ['Đầy đủ lý thuyết & thực hành', 'Xe số tự động & số sàn', 'Sa hình + đường trường', 'Cam kết đậu 100%'],
    price: '9.500.000',
    highlight: false,
  },
  {
    badge: '',
    badgeColor: '',
    icon: '🚛',
    title: 'Hạng C',
    subtitle: 'Xe tải trên 3.5 tấn',
    duration: '24 buổi học',
    features: ['Lý thuyết chuyên sâu', 'Thực hành xe tải hạng nặng', 'Thi sát hạch tập trung', 'Hỗ trợ đến khi đậu'],
    price: '12.000.000',
    highlight: false,
  },
]

export default function Courses() {
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  const [headRef, headIn] = useInView()
  const [gridRef, gridIn] = useInView()

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div ref={headRef} className={`text-center mb-12 fade-up ${headIn ? 'in-view' : ''}`}>
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Chương trình đào tạo</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-800">Các Khóa Học</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Đào tạo đầy đủ các hạng bằng lái theo quy định Bộ Công An. Học phí trọn gói, không phát sinh.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((c, i) => (
            <div
              key={c.title}
              className={`rounded-2xl p-6 border-2 flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-xl fade-up ${gridIn ? 'in-view' : ''} ${
                c.highlight
                  ? 'border-primary bg-primary text-white shadow-xl shadow-primary/30'
                  : 'border-gray-100 bg-white shadow-sm'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Badge */}
              {c.badge && (
                <span className={`self-start text-xs font-bold px-3 py-1 rounded-full mb-3 ${c.highlight ? 'bg-white text-primary' : c.badgeColor}`}>
                  {c.badge}
                </span>
              )}

              <div className="text-4xl mb-2">{c.icon}</div>
              <h3 className={`text-xl font-bold ${c.highlight ? 'text-white' : 'text-gray-800'}`}>{c.title}</h3>
              <p className={`text-sm mb-4 ${c.highlight ? 'text-blue-100' : 'text-gray-500'}`}>{c.subtitle}</p>

              <div className={`text-2xl font-extrabold mb-1 ${c.highlight ? 'text-yellow-300' : 'text-primary'}`}>
                {c.price}đ
              </div>
              <p className={`text-xs mb-5 ${c.highlight ? 'text-blue-100' : 'text-gray-400'}`}>{c.duration} • Trọn gói</p>

              <ul className="space-y-2 mb-6 flex-1">
                {c.features.map((f) => (
                  <li key={f} className={`flex items-start gap-2 text-sm ${c.highlight ? 'text-blue-50' : 'text-gray-600'}`}>
                    <span className={c.highlight ? 'text-yellow-300' : 'text-primary'}>✓</span> {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => scrollTo('#contact')}
                className={`w-full py-2.5 rounded-full font-semibold text-sm transition-colors ${
                  c.highlight
                    ? 'bg-white text-primary hover:bg-blue-50'
                    : 'bg-primary text-white hover:bg-primary-dark'
                }`}
              >
                Đăng Ký Ngay
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
