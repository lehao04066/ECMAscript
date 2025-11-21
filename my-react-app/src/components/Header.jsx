import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-white p-4 border-b border-gray-200">
      <ul className="flex gap-8 justify-center list-none p-0">
        <li><Link to="/" className="text-gray-700 no-underline hover:text-blue-gray-900">Home</Link></li>
        <li><Link to="/about" className="text-gray-700 no-underline hover:text-blue-gray-900">About</Link></li>
        <li><Link to="/tours" className="text-gray-700 no-underline hover:text-blue-gray-900">Tours</Link></li>
        <li><Link to="/destinations" className="text-gray-700 no-underline hover:text-blue-900">Destinations</Link></li>
        <li><Link to="/bookings" className="text-gray-700 no-underline hover:text-blue-900">Bookings</Link></li>
      </ul>
    </nav>
  );
};

export default Header;