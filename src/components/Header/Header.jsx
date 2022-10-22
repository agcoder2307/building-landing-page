import React from "react";
import image from "./living_room.jpg";
import "./Header.css";
import { VscLocation } from "react-icons/vsc";
import { FiSearch } from "react-icons/fi";
import { AiOutlineCalendar } from "react-icons/ai";

const Header = () => {
  return (
    <div className="header" id="header">
      <div className="header__image">
        <img src={image} alt="dining room" />
      </div>
      <div className="header__content">
        <div className="header__content-text">
          <h1>Rent Your Ideal Rooms</h1>
          <div>
            <p>
              Enter your information and we will help you find your ideal space
            </p>
          </div>
        </div>
        <div className="header__content-buttons">
          <div className="header__content-btn">
            <VscLocation style={{ color: "FC6F20", marginBottom: "0.14rem" }} />
            <p>Location</p>
          </div>
          <div className="divider" />
          <div className="header__content-btn">
            <AiOutlineCalendar
              style={{ color: "FC6F20", marginBottom: "0.14rem" }}
            />
            <p>Check-in</p>
          </div>
          <div className="divider" />
          <div className="header__content-btn">
            <AiOutlineCalendar
              style={{ color: "FC6F20", marginBottom: "0.14rem" }}
            />
            <p>Check-out</p>
          </div>
          <div className="header__content-btn">
            <FiSearch
              style={{
                color: "fff",
                marginRight: "0.2rem",
                width: "17px",
                marginBottom: "0.14rem",
              }}
            />
            <p>Search</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
