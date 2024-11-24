import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo-green.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="myfooter">
      <Link to="/">
        <img src={Logo} alt="Agreemetrics logo" />
      </Link>
      <p>Powered by DocuSign</p>
    </div>
  );
};

export default Footer;
