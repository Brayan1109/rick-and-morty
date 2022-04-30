import React from "react";
import animate from "../assets/img/animation.png";
import "./animationImage.css";

const AnimationImage = () => {
  return (
    <div>
      <img className="animate-logo" src={animate} alt="inimation" />
    </div>
  );
};

export default AnimationImage;
