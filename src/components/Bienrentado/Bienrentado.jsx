import React from "react";
import "./Bienrentado.css";
import coworkers from "./coworkers.jpg";
import { HiArrowNarrowRight } from "react-icons/hi";
import house from "./house.jpg";
import penhouse from "./penhouse.jpg";

const Bienrentado = () => {
  return (
    <div className="retard">
      <div className="retard__images">
        <div className="retard__images-1">
          <img src={coworkers} alt="coworkers" />
        </div>
        <div className="retard__images-2">
          <img src={house} alt="coworkers" />
        </div>
        <div className="retard__images-3">
          <img src={penhouse} alt="coworkers" />
        </div>
      </div>
      <div className="retard__content-text">
        <h1>What do you know about Bienrentado?</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos aliquam
          et delectus dolore natus, corporis placeat blanditiis, voluptates
          incidunt, fuga illo distinctio dicta inventore cum voluptatem
          necessitatibus eius reiciendis neque cumque perferendis quisquam.
          Recusandae, placeat.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo
          asperiores voluptate soluta. Hic rem sapiente nesciunt inventore omnis
          expedita fugiat fuga! Voluptates nisi sapiente quibusdam quod
          repellendus tempore facilis dolores, maxime ipsam?
        </p>
        <button type="button" className="retard__btn">
          Learn more
          <HiArrowNarrowRight
            style={{ marginTop: "0.15rem", marginLeft: "0.23rem" }}
          />
        </button>
      </div>
    </div>
  );
};

export default Bienrentado;
