import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';

function AddPage() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [duration, setDuration] = useState('');
  const [available, setAvailable] = useState(0);

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:3000/tours', {
        name,
        price: Number(price),
        category,
        description,
        image: imageUrl,
        duration,
        available: Number(available),
        active: true,
      });

      toast.success('Thêm tour thành công!');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Thêm mới Tour</h1>

      <form className="space-y-6" onSubmit={handleSubmit}>

        {/* Name */}
        <div>
          <label className="block font-medium mb-1">Name</label>
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            type="text"
            className="w-full border rounded-lg px-3 py-2"
            placeholder="Tên tour"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block font-medium mb-1">Price</label>
          <input
            value={price}
            onChange={e => setPrice(e.target.value)}
            type="number"
            className="w-full border rounded-lg px-3 py-2"
            placeholder="Giá tour"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block font-medium mb-1">Category</label>
          <select
            value={category}
            onChange={e => setCategory(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 bg-white"
          >
            <option value="">-- Chọn loại tour --</option>
            <option value="Tour Nội địa">Tour Nội địa</option>
            <option value="Tour Quốc tế">Tour Quốc tế</option>
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            className="w-full border rounded-lg px-3 py-2"
            rows="3"
            placeholder="Mô tả tour"
          ></textarea>
        </div>
        <div>
          <label className="block font-medium mb-1">Image URL</label>
          <input
            value={imageUrl}
            onChange={e => setImageUrl(e.target.value)}
            type="text"
            className="w-full border rounded-lg px-3 py-2"
            placeholder="https://..."
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Duration</label>
          <input
            value={duration}
            onChange={e => setDuration(e.target.value)}
            type="text"
            className="w-full border rounded-lg px-3 py-2"
            placeholder="4 ngày 3 đêm"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Available</label>
          <input
            value={available}
            onChange={e => setAvailable(e.target.value)}
            type="number"
            className="w-full border rounded-lg px-3 py-2"
            placeholder="Số lượng còn lại"
          />
        </div>
        <button
          type="submit"
          className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddPage;
