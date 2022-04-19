import "./LocationContainer.css"

function LocationInfo({data}){

    return(
        <>
             <div className="container-info">

            <div className="container-sub-info-1">
                <p> <b> Id: </b> {data.id}</p>
                <p><b>Nombre:</b> {data.name}</p>
            </div>


            <div className="container-sub-info-2">
                <p><b>Tipo:</b> {data.type}</p>
                <p><b>Dimensión:</b> {data.dimension}</p>
                <p><b>Cantidad de residentes</b> {(data.residents) ? data.residents.length : 0 }</p>
            </div>
            </div>
        </>
    )
}


export default LocationInfo;