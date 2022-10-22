import React from "react";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiTwitterLine } from "react-icons/ri";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__content-heading">
          <h4>
            <span>Bien.</span> Rentado
          </h4>
          <p>Copyright 2022 Bienrentado. All right reserved</p>
        </div>
        <ul>
          <li>Home</li>
          <li>Rooms</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
        <ul>
          <li>About Us</li>
          <li>Help Center</li>
          <li>Privacy policy</li>
          <li>FAQ's</li>
        </ul>
        <div className="footer__content-app">
          <h4>Get the App</h4>
          <p>IOS App</p>
          <p>Android App</p>
        </div>
      </div>
      <div className="footer__footer">
        <div>
          <TiSocialFacebookCircular className="footer__icon" />
          <AiOutlineInstagram className="footer__icon" />
          <RiTwitterLine className="footer__icon" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
