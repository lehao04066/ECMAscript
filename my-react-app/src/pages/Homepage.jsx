import "../App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TourCard from "../components/TourCard";


function Homepage() {
  const tour = [
    {
      id: 1,
      name: "Tour Đà Nẵng",
      img: "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20004789-a5cf524963f270785dc36a9659125e03.jpeg?_src=imagekit&tr=dpr-2,c-at_max,f-jpg,h-360,pr-true,q-80,w-640"
    },
    {
      id: 2,
      name: "Tour Nha Trang",
      img: "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20004789-a5cf524963f270785dc36a9659125e03.jpeg?_src=imagekit&tr=dpr-2,c-at_max,f-jpg,h-360,pr-true,q-80,w-640"
    },
    {
      id: 3,
      name: "Tour Hà Nội",
      img: "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20004789-a5cf524963f270785dc36a9659125e03.jpeg?_src=imagekit&tr=dpr-2,c-at_max,f-jpg,h-360,pr-true,q-80,w-640"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <div className="relative w-full h-[380px]">
        <img
          src="https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="banner"
          className="object-cover w-full h-full rounded-b-3xl shadow-lg"
        />
        <div className="absolute inset-0  bg-opacity-40 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold mb-2">Khám Phá Những Hành Trình Tuyệt Vời</h1>
          <p className="text-lg">Ưu đãi lên đến 30% cho khách đặt sớm</p>
        </div>
      </div>
      <div className="text-center mt-10">
        <h2 className="text-3xl font-semibold text-blue-600">🔥 Tour Nổi Bật</h2>
        <p className="text-gray-600 mt-2">Lựa chọn những điểm đến được yêu thích nhất</p>
      </div>

   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-10 mt-8">
  {tour.map((item) => (
    <TourCard key={item.id} props={{ title: item.name, image: item.img }} />
  ))}
</div>
      <Footer />
    </div>
  );
}

export default Homepage;
