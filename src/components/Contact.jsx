import { useState } from 'react'
import useInView from '../hooks/useInView'

const courses = ['Hạng A1', 'Hạng A2', 'Hạng B1', 'Hạng B2', 'Hạng C', 'Chưa quyết định']

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', course: '', message: '' })
  const [sent, setSent] = useState(false)
  const [headRef, headIn] = useInView()
  const [bodyRef, bodyIn] = useInView()

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: 'YOUR_WEB3FORMS_ACCESS_KEY', // Lấy key tại: https://web3forms.com
        subject: `Đăng ký học lái xe – ${form.name}`,
        ...form,
      }),
    })
    if (res.ok) setSent(true)
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div ref={headRef} className={`text-center mb-12 fade-up ${headIn ? 'in-view' : ''}`}>
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Liên hệ & Đăng ký</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-800">Đăng Ký Học Thử Miễn Phí</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">
            Điền form bên dưới, chúng tôi sẽ liên hệ lại trong vòng 30 phút để tư vấn lịch học phù hợp.
          </p>
        </div>

        <div ref={bodyRef} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 fade-up ${bodyIn ? 'in-view' : ''}`}>
          {/* Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            {sent ? (
              <div className="text-center py-10">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Đăng ký thành công!</h3>
                <p className="text-gray-500 text-sm">Chúng tôi sẽ liên hệ với bạn sớm nhất. Cảm ơn bạn đã tin tưởng FOX!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Họ và tên *</label>
                    <input
                      name="name" required value={form.name} onChange={handleChange}
                      placeholder="Nguyễn Văn A"
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Số điện thoại *</label>
                    <input
                      name="phone" required value={form.phone} onChange={handleChange}
                      placeholder="0909 xxx xxx"
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    name="email" type="email" value={form.email} onChange={handleChange}
                    placeholder="email@example.com"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Khóa học quan tâm *</label>
                  <select
                    name="course" required value={form.course} onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary bg-white"
                  >
                    <option value="">-- Chọn khóa học --</option>
                    {courses.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Ghi chú</label>
                  <textarea
                    name="message" rows={3} value={form.message} onChange={handleChange}
                    placeholder="Thời gian rảnh, yêu cầu đặc biệt..."
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 rounded-full font-bold hover:bg-primary-dark transition-colors text-sm"
                >
                  Gửi Đăng Ký
                </button>
              </form>
            )}
          </div>

          {/* Info + Map */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-800 mb-4">Thông Tin Liên Hệ</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start gap-3">
                  <span className="text-primary mt-0.5">📍</span>
                  <span>123 Đường Lê Văn Việt, Phường Hiệp Phú, TP. Thủ Đức, TP. Hồ Chí Minh</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-primary">📞</span>
                  <a href="tel:0909123456" className="hover:text-primary font-medium">0909 123 456</a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-primary">✉️</span>
                  <a href="mailto:info@laixefox.vn" className="hover:text-primary">info@laixefox.vn</a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-primary">🕐</span>
                  <span>Thứ 2 – Chủ Nhật: 7:00 – 21:00</span>
                </div>
              </div>
            </div>

            {/* Google Maps embed placeholder */}
            <div className="rounded-2xl overflow-hidden shadow-sm h-52 bg-gray-200 flex items-center justify-center">
              <iframe
                title="Bản đồ Lái Xe FOX"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.6!2d106.827!3d10.845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDUwJzQyLjAiTiAxMDbCsDQ5JzM3LjIiRQ!5e0!3m2!1svi!2svn!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
