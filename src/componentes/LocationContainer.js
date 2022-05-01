import LocationInfo from "./LocationInfo";

function LocationContainer({ data }) {
  return (
    <>
      <section className="container-location">
        <h3>LOCALIZACIÓN RICK AND MORTY</h3>

        {data.residents ? <LocationInfo data={data} /> : <p>Cargando</p>}
      </section>
    </>
  );
}

export default LocationContainer;
