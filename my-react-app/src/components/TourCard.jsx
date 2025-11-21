// src/components/TourCard.jsx
import Button from "./Button";

const TourCard = ({props}) => {
    return (
        <div>
           <h2>{props.title}</h2>
           <img src={props.image} alt="" />
           <Button label="Xem Thêm"></Button>
           <Button label="Đặt Ngay"></Button>
        </div>
    )
}
export default TourCard;