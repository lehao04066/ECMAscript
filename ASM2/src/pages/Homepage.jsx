import React from "react";

export default function HomePage() {
  const featuredTours = [
    {
      id: 1,
      name: "Đà Lạt 4N3D",
      price: 3200000,
      image:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200",
    },
    {
      id: 2,
      name: "Nha Trang 3N2D",
      price: 2800000,
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200",
    },
    {
      id: 3,
      name: "Hội An 2N1D",
      price: 1900000,
      image:
        "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=1200",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50 text-gray-800">
      {/* Banner */}
      <div
        className="w-full h-80 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600')",
        }}
      >
        <div className="bg-black bg-opacity-50 p-6 rounded-xl text-white text-center">
          <h1 className="text-4xl font-bold mb-2">Khám phá Tour Hấp Dẫn</h1>
          <p className="text-lg">Ưu đãi tốt nhất - Trải nghiệm tuyệt nhất</p>
        </div>
      </div>

      {/* Featured Tours */}
      <div className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Tour nổi bật</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredTours.map((tour) => (
            <div
              key={tour.id}
              className="bg-white shadow rounded-xl overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={tour.image}
                alt={tour.name}
                className="w-full h-48 object-cover"
              />

              <div className="p-4 text-left">
                <h3 className="text-xl font-semibold mb-2">{tour.name}</h3>
                <p className="text-blue-600 font-bold text-lg mb-3">
                  {tour.price.toLocaleString()} đ
                </p>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                  Xem chi tiết
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-6 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-lg font-medium">Lê Hảo Travel 2025</p>
          <p className="text-sm mt-1">Mang đến trải nghiệm du lịch tuyệt vời nhất.</p>
        </div>
      </footer>
    </div>
  );
}