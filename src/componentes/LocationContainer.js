import LocationInfo from "./LocationInfo";



function LocationContainer({data}){


    return(
        <>
            <section className="container-location">
                <h3>LOCALIZACIÓN RICK AND MORTY</h3>

                <LocationInfo data={data} />

            </section>

        </>
    )
}

export default LocationContainer;