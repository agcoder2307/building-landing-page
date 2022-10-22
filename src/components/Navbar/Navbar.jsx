import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__top-line" />
      <div className="navbar__container">
        <h1>
          <span>Bien.</span>Rentado
        </h1>
        <ul className="navbar__links">
          <a href="#home">Home</a>
          <a href="#rooms">Rooms</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <button type="button" className="navbar__button">
            Sing in
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
