import axios from 'axios';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

function EditPage() {
  const { id } = useParams();

  const [name, setName] = useState('');
  const [destination, setDestination] = useState('');
  const [duration, setDuration] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [available, setAvailable] = useState('');

  useEffect(() => {
    const getTour = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3000/tours/${id}`);

        setName(data.name);
        setDestination(data.destination);
        setDuration(data.duration);
        setPrice(data.price);
        setImage(data.image);
        setDescription(data.description);
        setAvailable(data.available);
      } catch (error) {
        toast.error('Lỗi API');
      }
    };
    getTour();
  }, [id]);
 
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`http://localhost:3000/tours/${id}`, {
        name,
        destination,
        duration,
        price: Number(price),
        image,
        description,
        available: Number(available),
      });

      toast.success('Cập nhật tour thành công!');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Update Tour ID: {id}</h1>

      <form className="space-y-6" onSubmit={handleSubmit}>

        {/* NAME */}
        <div>
          <label className="block font-medium mb-1">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        {/* DESTINATION */}
        <div>
          <label className="block font-medium mb-1">Destination</label>
          <input
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            type="text"
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        {/* DURATION */}
        <div>
          <label className="block font-medium mb-1">Duration</label>
          <input
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            type="text"
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        {/* PRICE */}
        <div>
          <label className="block font-medium mb-1">Price</label>
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        {/* IMAGE */}
        <div>
          <label className="block font-medium mb-1">Image URL</label>
          <input
            value={image}
            onChange={(e) => setImage(e.target.value)}
            type="text"
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        {/* DESCRIPTION */}
        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border rounded-lg px-3 py-2"
          ></textarea>
        </div>

        {/* AVAILABLE */}
        <div>
          <label className="block font-medium mb-1">Available</label>
          <input
            value={available}
            onChange={(e) => setAvailable(e.target.value)}
            type="number"
            className="w-full border rounded-lg px-3 py-2"
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

export default EditPage;
