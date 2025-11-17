const Header = () => {
    return (
        <nav>
            <ul className="flex gap-4 p-4  text-red-500 justify-center text-3xl font-bold">
                <li><a href="/">  🏠 Home  </a></li>
                <li><a href="/">📋 Tours</a></li>
                <li><a href="/">🗺️ Destinations</a></li>
                <li><a href="/">  🎫 Bookings│</a></li>
            </ul>
        </nav>
    )
}
export default Header;