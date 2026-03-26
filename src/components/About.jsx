import useInView from '../hooks/useInView'

const instructors = [
  { name: 'Thầy Nguyễn Văn Minh', role: 'Huấn luyện viên B1, B2', exp: '12 năm kinh nghiệm', avatar: 'M' },
  { name: 'Thầy Trần Đức Hòa', role: 'Huấn luyện viên B2, C', exp: '9 năm kinh nghiệm', avatar: 'H' },
  { name: 'Thầy Lê Quang Khải', role: 'Huấn luyện viên A1, A2', exp: '7 năm kinh nghiệm', avatar: 'K' },
  { name: 'Cô Phạm Thị Hoa', role: 'Huấn luyện viên B1, B2', exp: '8 năm kinh nghiệm', avatar: 'H' },
]

export default function About() {
  const [storyRef, storyIn] = useInView()
  const [teamRef, teamIn] = useInView()

  return (
    <section id="about" className="py-20 bg-white">  
      <div className="max-w-6xl mx-auto px-4">
        <div ref={storyRef} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 fade-up ${storyIn ? 'in-view' : ''}`}>
          {/* Story */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Về chúng tôi</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-800 mb-4">
              Câu Chuyện Lái Xe FOX
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Thành lập năm 2014, <strong>Trung tâm đào tạo lái xe FOX</strong> ra đời với sứ mệnh đơn giản: 
              giúp mỗi người Việt Nam tự tin lái xe an toàn và đúng luật.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Qua hơn 10 năm phát triển tại TP. Hồ Chí Minh, chúng tôi đã đào tạo hơn 5.000 học viên thành công.
              Với đội ngũ 50+ huấn luyện viên chuyên nghiệp và cơ sở vật chất hiện đại, FOX cam kết mang lại 
              chất lượng đào tạo tốt nhất.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="bg-primary-light rounded-xl px-5 py-3 text-center">
                <div className="text-2xl font-extrabold text-primary">2014</div>
                <div className="text-xs text-gray-500">Năm thành lập</div>
              </div>
              <div className="bg-primary-light rounded-xl px-5 py-3 text-center">
                <div className="text-2xl font-extrabold text-primary">5 hạng</div>
                <div className="text-xs text-gray-500">A1, A2, B1, B2, C</div>
              </div>
              <div className="bg-primary-light rounded-xl px-5 py-3 text-center">
                <div className="text-2xl font-extrabold text-primary">Bộ CA</div>
                <div className="text-xs text-gray-500">Được cấp phép</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="bg-gradient-to-br from-primary to-blue-700 rounded-3xl p-8 text-white">
            <h3 className="text-xl font-bold mb-6">Cơ sở vật chất</h3>
            <ul className="space-y-3">
              {[
                '🏫 Trụ sở rộng 2.000m² tại TP.HCM',
                '🚗 30+ xe tập lái đời mới 2020-2024',
                '🛵 20+ xe máy các loại',
                '📽️ Phòng học lý thuyết điều hòa',
                '🅿️ Bãi tập sa hình đạt chuẩn',
                '📱 Học lý thuyết qua app mobile',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-blue-50 text-sm">
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Instructors */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-800">Đội Ngũ Huấn Luyện Viên</h3>
          <p className="text-gray-500 text-sm mt-1">Tất cả huấn luyện viên đều có chứng chỉ quốc gia</p>
        </div>
        <div ref={teamRef} className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {instructors.map((i, idx) => (
            <div
              key={i.name}
              className={`text-center bg-gray-50 rounded-2xl p-5 hover:shadow-md hover:-translate-y-1 transition-all duration-300 fade-up ${teamIn ? 'in-view' : ''}`}
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3">
                {i.avatar}
              </div>
              <div className="font-semibold text-gray-800 text-sm">{i.name}</div>
              <div className="text-primary text-xs mt-0.5">{i.role}</div>
              <div className="text-gray-400 text-xs mt-1">{i.exp}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
