import React from "react";
import Ricklogo from "../assets/logos/Rick-And-Morty-Logo.png";
import "./title.css";

const Title = () => {
  return (
    <div>
      <img className="animation-title" src={Ricklogo} alt="logo" />
    </div>
  );
};

export default Title;
