import './App.css'
import Header from './component/Header' 
import Footer from './component/Footer'
import TourCard from './component/TourCard'
// import TourCard from './component/TourCard'
export default App
function App() {
  
  const tour=[
    {
      id:1,
      name:"Tour Đà Nẵng",
      img:"https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20004789-a5cf524963f270785dc36a9659125e03.jpeg?_src=imagekit&tr=dpr-2,c-at_max,f-jpg,h-360,pr-true,q-80,w-640"
    },
    {
      id:2,
      name:"Tour Nha Trang",
      img:"https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20004789-a5cf524963f270785dc36a9659125e03.jpeg?_src=imagekit&tr=dpr-2,c-at_max,f-jpg,h-360,pr-true,q-80,w-640"
    },
    {
      id:3,
      name:"Tour Ha Noi",
      img:"https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20004789-a5cf524963f270785dc36a9659125e03.jpeg?_src=imagekit&tr=dpr-2,c-at_max,f-jpg,h-360,pr-true,q-80,w-640"
    },

  ]
  return (
    
    <div>

      <Header></Header>
      <h1 className='text-blue-500 text-4xl '> ✈️ TOUR MANAGEMENT SYSTEM</h1>
      <h2>Trải nghiệm kỳ nghỉ tuyệt vời</h2>
      <p>Giảm giá đặc biệt cho khách hàng đặt tour sớm!</p>
    
      <div className="flex gap-5 mt-5 justify-center">
{tour.map(tour=>
  <TourCard key={tour.id} props={{title:tour.name,image:tour.img}}></TourCard>
)}
      </div>
      <Footer></Footer>
    </div>
  )
}

