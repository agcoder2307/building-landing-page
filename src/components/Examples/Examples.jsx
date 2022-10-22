import React from "react";
import Card from "./Card";
import "./Examples.css";
import image1 from "./image-1.jpg";
import image2 from "./image-2.jpg";
import image3 from "./image-3.jpg";
import image4 from "./image-4.jpg";

const card_data = [
  {
    title: "Hotel Mawar & Melati Putih",
    meter: "320m",
    price: "Start from 120 USD",
    rating: 5,
    img: image1,
  },
  {
    title: "Hotel Mawar & Melati Putih",
    meter: "320m",
    price: "Start from 120 USD",
    rating: 5,
    img: image2,
  },
  {
    title: "Hotel Mawar & Melati Putih",
    meter: "320m",
    price: "Start from 120 USD",
    rating: 5,
    img: image3,
  },
  {
    title: "Hotel Mawar & Melati Putih",
    meter: "320m",
    price: "Start from 120 USD",
    rating: 5,
    img: image4,
  },
];

const Examples = () => {
  return (
    <div className="examples" id="rooms">
      <div className="examples__heading">
        <h1>We provide the best homestay for you</h1>
        <button className="examples__btn" type="button">
          View all
        </button>
      </div>
      <div className="examples__card">
        {card_data.map((card) => (
          <Card
            title={card.title}
            price={card.price}
            meter={card.meter}
            image={card.img}
            rating={card.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default Examples;
