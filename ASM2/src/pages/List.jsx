import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ListPage() {
  const [tours, setTours] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3000/tours").then((res) => setTours(res.data));
  }, []);

  const deleteTour = (id) => {
    if (window.confirm("Xóa tour?")) {
      axios.delete(`http://localhost:3000/tours/${id}`);
      setTours(tours.filter((t) => t.id !== id));
    }
  };

  const toggleActive = (tour) => {
    const updated = { ...tour, active: !tour.active };
    axios.put(`http://localhost:3000/tours/${tour.id}`, updated);
    setTours(tours.map((t) => (t.id === tour.id ? updated : t)));
  };

  const filtered = tours.filter((t) => {
    if (!t || !t.name) return false; // tránh lỗi undefined
    return t.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Danh sách Tour</h1>

      <input
        className="border p-2 mb-4 rounded"
        placeholder="Tìm kiếm tên tour..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Tên</th>
            <th className="p-2 border">Giá</th>
            <th className="p-2 border">Ảnh</th>
            <th className="p-2 border">Active</th>
            <th className="p-2 border">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((tour) => (
            <tr key={tour.id}>
              <td className="p-2 border">{tour.id}</td>
              <td className="p-2 border">{tour.name}</td>
              <td className="p-2 border">{tour.price}</td>
              <td className="p-2 border">
                <img src={tour.image} alt={tour.name} className="w-20 h-14 object-cover mx-auto" />
              </td>

              <td className="p-2 border text-center">
                <label className="cursor-pointer inline-flex items-center">
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={tour.active}
                    onChange={() => toggleActive(tour)}
                  />
                  <div className={`w-12 h-6 rounded-full relative transition ${tour.active ? "bg-green-500" : "bg-gray-300"}`}>
                    <div
                      className={`w-5 h-5 bg-white rounded-full shadow absolute top-0.5 transition-all ${tour.active ? "translate-x-6" : "translate-x-1"}`}
                    ></div>
                  </div>
                </label>
              </td>

              <td className="p-2 border space-x-2 text-center">
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => deleteTour(tour.id)}
                >
                  Xóa
                </button>
                <Link
                  to={`/edit/${tour.id}`}
                  className="bg-yellow-500 text-white px-2 py-1 rounded"
                >
                  Sửa
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListPage;
