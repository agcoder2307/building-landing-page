import React from "react";
import { AiFillStar } from "react-icons/ai";
const Card = ({ title, rating, price, image, meter }) => {
  return (
    <div className="card">
      <div className="card__image">
        <img src={image} alt={`${rating + Math.random}`} />
      </div>
      <div className="card__body">
        <div className="card__body-text">
          <h3>{title}</h3>
          <p>{meter}</p>
        </div>
        <div className="card__footer">
          <h5>{price}</h5>
          <span>
            <p>{rating}.0</p>
            <AiFillStar
              style={{
                color: "fc6f20",
                fontSize: "15px",
                marginTop: "0.2rem",
              }}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
