import { logDOM } from "@testing-library/react";
import React from "react";
import Ricklogo from "../assets/logos/Rick-And-Morty-Logo.png";

const Title = () => {
  return (
    <div>
      <img src={Ricklogo} alt="logo" />
    </div>
  );
};

export default Title;
