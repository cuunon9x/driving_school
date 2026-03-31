import useInView from '../hooks/useInView'

const reasons = [
  {
    icon: '🏆',
    title: 'Giáo viên chuyên nghiệp',
    desc: 'Đội ngũ huấn luyện viên có bằng cấp quốc gia, nhiều năm kinh nghiệm, tận tâm hướng dẫn từng học viên.',
  },
  {
    icon: '📅',
    title: 'Lịch học linh hoạt',
    desc: 'Sáng – chiều – tối, học viên chủ động chọn giờ học phù hợp với lịch làm việc và sinh hoạt cá nhân.',
  },
  {
    icon: '🚗',
    title: 'Xe học hiện đại',
    desc: 'Xe tập lái đời mới, được bảo dưỡng thường xuyên, đảm bảo an toàn tuyệt đối cho học viên.',
  },
  {
    icon: '💰',
    title: 'Học phí hợp lý',
    desc: 'Mức học phí cạnh tranh, hỗ trợ trả góp. Cam kết không phát sinh chi phí trong suốt khóa học.',
  },
  {
    icon: '📋',
    title: 'Hỗ trợ thi lý thuyết',
    desc: 'Cung cấp bộ câu hỏi ôn tập, giải đề trực tiếp. Sát hạch lý thuyết và thực hành tại trung tâm.',
  },
  {
    icon: '🎓',
    title: 'Cam kết đầu ra',
    desc: 'Thi không đậu học lại miễn phí. Hỗ trợ đến khi học viên có bằng lái xe hợp lệ.',
  },
]

export default function WhyUs() {
  const [headRef, headIn] = useInView()
  const [gridRef, gridIn] = useInView()

  return (
    <section id="why" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div ref={headRef} className={`text-center mb-12 fade-up ${headIn ? 'in-view' : ''}`}>
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Lý do chọn chúng tôi</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-800">Tại Sao Chọn Lái Xe FOX?</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Cam kết mang đến trải nghiệm học lái xe tốt nhất, an toàn và hiệu quả nhất tại TP. Hồ Chí Minh.
          </p>
        </div>

       <div ref={gridRef} className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 fade-up ${gridIn ? 'in-view' : ''}`}>
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className="why-card"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="text-4xl mb-4">{r.icon}</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{r.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
