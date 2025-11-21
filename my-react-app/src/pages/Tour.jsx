import "../App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TourCard from "../components/TourCard";

function Tours() {
  const tour = [
    {
      id: 1,
      name: "Hà Nội - Sapa 3N2D",
      img: "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20004789-a5cf524963f270785dc36a9659125e03.jpeg?_src=imagekit&tr=dpr-2,c-at_max,f-jpg,h-360,pr-true,q-80,w-640"
    },
    {
      id: 2,
      name: "Hạ Long - Cát Bà 2N1D",
      img: "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20004789-a5cf524963f270785dc36a9659125e03.jpeg?_src=imagekit&tr=dpr-2,c-at_max,f-jpg,h-360,pr-true,q-80,w-640"
    },
    {
      id: 3,
      name: "Bà Lát - Vịnh Hạ Long",
      img: "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20004789-a5cf524963f270785dc36a9659125e03.jpeg?_src=imagekit&tr=dpr-2,c-at_max,f-jpg,h-360,pr-true,q-80,w-640"
    },
    {
      id: 4,
      name: "Phú Quốc - Biển Đảo",
      img: "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20004789-a5cf524963f270785dc36a9659125e03.jpeg?_src=imagekit&tr=dpr-2,c-at_max,f-jpg,h-360,pr-true,q-80,w-640"
    },
    {
      id: 5,
      name: "Đà Nẵng - Bà Nà Hills",
      img: "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20004789-a5cf524963f270785dc36a9659125e03.jpeg?_src=imagekit&tr=dpr-2,c-at_max,f-jpg,h-360,pr-true,q-80,w-640"
    },
    {
      id: 6,
      name: "Nha Trang - Vinpearl",
      img: "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20004789-a5cf524963f270785dc36a9659125e03.jpeg?_src=imagekit&tr=dpr-2,c-at_max,f-jpg,h-360,pr-true,q-80,w-640"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />  
      <div className="text-center mt-10">
        <h2 className="text-3xl font-semibold text-blue-600">🔥 Tất Cả Tour</h2>
        <p className="text-gray-600 mt-2">Lựa chọn từ hàng trăm tour chất lượng cao</p>
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

export default Tours;