import axios from "axios";
import { useState, useEffect } from "react";

function List() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:3001/tours");
        setTours(response.data);
        setError(null);
      } catch (err) {
        setError("Không thể tải danh sách tours");
        console.error("Error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchTours();
  }, []);
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Danh sách Tour</h1>
      {loading && <p className="text-blue-500">Đang tải dữ liệu...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && (
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-3 border">ID</th>
                <th className="p-3 border">Tên tour</th>
                <th className="p-3 border">Giá</th>
                <th className="p-3 border">Ảnh</th>
              </tr>
            </thead>

            <tbody>
              {tours.map((tour) => (
                <tr key={tour.id} className="hover:bg-gray-50">
                  <td className="p-3 border">{tour.id}</td>
                  <td className="p-3 border">{tour.name}</td>
                  <td className="p-3 border font-medium">
                    {tour.price} đ
                  </td>
                  <td className="p-3 border">
                    <img
                      src={tour.image}
                      alt={tour.name}
                      className="w-20 rounded"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default List;
