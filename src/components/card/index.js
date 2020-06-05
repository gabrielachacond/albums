import React from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";

const renderStart = rating => {
  const output = [];
  for (let i = 0; i < 5; i++) {
    i < rating
      ? output.push(<FontAwesomeIcon icon={faStar} color="yellow" />)
      : output.push(<FontAwesomeIcon icon={faStar} color="black" />);
  }
  return output;
};
const Card = props => (
  <div className="container">
    <div className="top">
      <img src={props.img} className="photo" />
      <div>
        <h2>{props.name}</h2>
        <p>{props.artist}</p>
        <p>{`(${props.year})`}</p>
      </div>
      <FontAwesomeIcon
        size="lg"
        icon={faHeart}
        color={props.liked ? "red" : ""}
      />
    </div>
    <div className="bottom">
      <p>Rate this album</p>
      {/* <FontAwesomeIcon icon={faStar} color = {props.rating ? "yellow" :"" } />
      <FontAwesomeIcon icon={faStar} color = {props.rating ? "yellow" :"" } />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} /> */}

      {renderStart(props.rating)}
    </div>
  </div>
);

export default Card;

/*name: "coloca aca el nombre de un album que te guste mucho",
artist: "junto al artista",
year: 2019,
img: "inserta aqui el url de tu imagen",
rating: 3,
liked: false
*/
