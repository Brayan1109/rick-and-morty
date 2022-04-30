import { useState } from "react";
import img_search from "../assets/img/img_search.png";
import "./SearchBox.css";

export default function SearchBox({ setLocation }) {
  const [onChangeLocation, setOnChangeLocation] = useState("");
  const [type, setType] = useState("");

  const handlerLocation = (e) => {
    setOnChangeLocation(e.target.value);
  };

  const searchByType = () => {
    let optUrl = type + onChangeLocation;
    setLocation(optUrl);
  };

  return (
    <div className="container">
      <label htmlFor="search">
        {" "}
        <img className="image" src={img_search} alt="imagesearch" />{" "}
      </label>
      <input
        className="input-search"
        id="search"
        type="text"
        onChange={handlerLocation}
        placeholder="Buscar"
      />
      <button
        className="button-search"
        onClick={() => {
          searchByType();
        }}
      >
        Buscar
      </button>

      <select
        className="select"
        name="type"
        onChange={(e) => setType(e.target.value)}
        defaultValue="id"
      >
        <option value=""> Id </option>
        <option value="?name="> Name </option>
        <option value="?type="> Type </option>
        <option value="?dimension="> Dimensión </option>
      </select>
    </div>
  );
}
