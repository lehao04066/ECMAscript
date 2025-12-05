function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto p-8 text-left">
      <h1 className="text-4xl font-bold mb-6 text-blue-600">About Us</h1>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Chào mừng bạn đến với <strong>WEB501 Tours</strong> – nền tảng được xây dựng nhằm giúp bạn quản lý các tour du lịch một cách chuyên nghiệp, đơn giản và tiện lợi.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3"> Sứ mệnh</h2>
      <p className="text-gray-700 mb-6">
        Mang đến trải nghiệm quản lý tour nhanh chóng, hiệu quả với giao diện thân thiện và dễ dùng.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">Chúng tôi làm gì?</h2>
      <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-6">
        <li>Quản lý danh sách tour dễ dàng</li>
        <li>Chỉnh sửa, thêm mới, xóa tour</li>
        <li>Tối ưu cho giảng viên kiểm tra bài Web501</li>
        <li>Hỗ trợ xác thực đăng nhập / đăng ký</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3">Liên hệ</h2>
      <p className="text-gray-700 mb-2">Email: support@gmail.com</p>
      <p className="text-gray-700">Hotline: 0123 456 789</p>

      <div className="mt-10 p-6 bg-blue-50 border-l-4 border-blue-600 rounded-lg">
        <p className="text-gray-700 italic">
          "Cảm ơn bạn đã sử dụng hệ thống o!" 
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
