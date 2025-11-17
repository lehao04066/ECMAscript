import Button from "./Button";

const TourCard = ({props}) => {
    return (
        <div>
           <h2>{props.title}</h2>
           <img src={props.image} alt="" />
           <Button></Button>
        </div>
    )
}
export default TourCard;