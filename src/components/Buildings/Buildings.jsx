import React from "react";
import "./Buildings.css";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";
import img5 from "./img5.jpg";
import img6 from "./img6.jpg";

const Buildings = () => {
  return (
    <div className="collage" id="gallery">
      <div className="collage__heading">
        <h1>We provide the best for you</h1>
        <button type="button" className="btn">
          View all
        </button>
      </div>
      <div className="collage__container">
        <div className="collage__container-grid">
          <img src={img1} alt={`${Math.random}`} />
          <img src={img2} alt={`${Math.random}`} />
          <img src={img3} alt={`${Math.random}`} />
          <img src={img4} alt={`${Math.random}`} />
        </div>
        <div className="collage__container-flex">
          <img src={img5} alt={`${Math.random}`} />
          <img src={img6} alt={`${Math.random}`} />
        </div>
      </div>
    </div>
  );
};

export default Buildings;
