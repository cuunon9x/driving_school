import useInView from '../hooks/useInView'

const testimonials = [
  {
    name: 'Nguyễn Thanh Hùng',
    course: 'Hạng B2',
    avatar: 'H',
    text: 'Tôi học B2 tại FOX và đậu ngay lần đầu. Thầy dạy rất tận tình, giải thích kỹ từng bài sa hình. Phí học hợp lý, không phát sinh thêm gì cả. Rất recommend!',
    stars: 5,
  },
  {
    name: 'Trần Thị Lan Anh',
    course: 'Hạng A2',
    avatar: 'L',
    text: 'Ban đầu tôi rất sợ đi xe phân khối lớn nhưng các thầy ở FOX rất kiên nhẫn. Sau 2 tuần tôi đã tự tin điều khiển xe. Cảm ơn trung tâm rất nhiều!',
    stars: 5,
  },
  {
    name: 'Phạm Quốc Tuấn',
    course: 'Hạng B1',
    avatar: 'T',
    text: 'Lịch học linh hoạt rất phù hợp với người đi làm như tôi. Học buổi tối vẫn có đủ xe và giáo viên. Thi đậu lần 1 sau 2 tháng học. Quá hài lòng!',
    stars: 5,
  },
]

export default function Testimonials() {
  const [headRef, headIn] = useInView()
  const [gridRef, gridIn] = useInView()
  const [ctaRef, ctaIn] = useInView()

  return (
    <section id="testimonials" className="py-20 bg-primary-light">
      <div className="max-w-6xl mx-auto px-4">
        <div ref={headRef} className={`text-center mb-12 fade-up ${headIn ? 'in-view' : ''}`}>
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Học viên nói gì</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-800">Cảm Nhận Học Viên</h2>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="review-card"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex text-yellow-400 text-lg mb-4">
                {'★'.repeat(t.stars)}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-800 text-sm">{t.name}</div>
                  <div className="text-primary text-xs">{t.course}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div ref={ctaRef} className={`mt-14 bg-primary rounded-2xl p-8 text-center text-white fade-up ${ctaIn ? 'in-view' : ''}`}>
          <h3 className="text-2xl font-bold mb-2">Bạn đã sẵn sàng lái xe?</h3>
          <p className="text-blue-100 mb-5 text-sm">Đăng ký tư vấn miễn phí hôm nay – nhận ưu đãi học phí ngay!</p>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-300 transition-colors"
          >
            Đăng Ký Tư Vấn Miễn Phí
          </button>
        </div>
      </div>
    </section>
  )
}
