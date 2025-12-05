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
  const [available, setAvailable] = useState('');
  const [active, setActive] = useState(true);

  const validate = () => {
    if (!name || name.length < 5 || name.length > 100)
      return 'Tên tour phải từ 5-100 ký tự';

    if (!price || Number(price) <= 0)
      return 'Giá tour phải là số > 0';

    if (!category || !['Tour Nội địa', 'Tour Quốc tế'].includes(category))
      return 'Category không hợp lệ';

    if (!description || description.length < 10 || description.length > 1000)
      return 'Mô tả phải từ 10-1000 ký tự';

    if (!imageUrl || !/^https?:\/\/.+/.test(imageUrl))
      return 'Image URL không hợp lệ';

    if (!duration)
      return 'Duration là bắt buộc';

    if (available === '' || Number(available) < 0)
      return 'Available phải ≥ 0';

    return null;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const error = validate();
    if (error) return toast.error(error);

    try {
      await axios.post('http://localhost:3000/tours', {
        name,
        price: Number(price),
        category,
        description,
        image: imageUrl,
        duration,
        available: Number(available),
        active
      });

      toast.success('Thêm tour thành công!');
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Thêm mới Tour</h1>

      <form className="space-y-6" onSubmit={handleSubmit}>

        <div>
          <label className="block font-medium mb-1">Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="w-full border rounded-lg px-3 py-2" placeholder="Tên tour" />
        </div>

        <div>
          <label className="block font-medium mb-1">Price</label>
          <input value={price} onChange={(e) => setPrice(e.target.value)} type="number" className="w-full border rounded-lg px-3 py-2" placeholder="Giá tour" />
        </div>

        <div>
          <label className="block font-medium mb-1">Category</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full border rounded-lg px-3 py-2 bg-white">
            <option value="">-- Chọn loại tour --</option>
            <option value="Tour Nội địa">Tour Nội địa</option>
            <option value="Tour Quốc tế">Tour Quốc tế</option>
          </select>
        </div>

        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="w-full border rounded-lg px-3 py-2" rows="3" placeholder="Mô tả tour"></textarea>
        </div>

        <div>
          <label className="block font-medium mb-1">Image URL</label>
          <input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} type="text" className="w-full border rounded-lg px-3 py-2" placeholder="https://..." />
        </div>

        <div>
          <label className="block font-medium mb-1">Duration</label>
          <input value={duration} onChange={(e) => setDuration(e.target.value)} type="text" className="w-full border rounded-lg px-3 py-2" placeholder="4 ngày 3 đêm" />
        </div>

        <div>
          <label className="block font-medium mb-1">Available</label>
          <input value={available} onChange={(e) => setAvailable(e.target.value)} type="number" className="w-full border rounded-lg px-3 py-2" placeholder="Số lượng còn lại" />
        </div>

        <div className="flex items-center space-x-2">
          <input type="checkbox" checked={active} onChange={() => setActive(!active)} />
          <label>Active</label>
        </div>

        <button type="submit" className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Submit</button>
      </form>
    </div>
  );
}

export default AddPage;