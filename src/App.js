import { useEffect, useState } from "react";
import "./App.css";
import LocationContainer from "./componentes/LocationContainer";
import ResidentContainer from "./componentes/ResidentContainer";
import SearchBox from "./componentes/SearchBox";
import getByType from "./services/getByType";
import portada from "./assets/img/portada.png";
import Title from "./componentes/Title";
import AnimationImage from "./componentes/AnimationImage";

function App() {
  let value = Math.floor(Math.random() * 126 - 1);
  const [location, setLocation] = useState(value);
  const [data, setData] = useState({});

  useEffect(() => {
    getByType(location)
      .then((req) => {
        if (!(typeof location === "number")) {
          if (location.split("?").length > 1) {
            setData(req.data.results[0]);
          } else {
            setData(req.data);
          }
        } else {
          setData(req.data);
        }
      })
      .catch((e) => {
        window.alert("No hay coincidencias para la busqueda...");
      });
  }, [location]);

  return (
    <div className="App">
      <div className="container-title">
        <Title />
      </div>

      <div className="logo-animate">
        <AnimationImage />
      </div>

      <div className="container-image-portada">
        <img src={portada} alt="Portada" />
      </div>
      <section className="container-background-image">
        <div className="container-opacity">
          <SearchBox location={location} setLocation={setLocation} />
          <LocationContainer data={data} />
          <ResidentContainer residents={data} />
        </div>
      </section>
    </div>
  );
}

export default App;
