import { useEffect, useState } from "react";
import getResidents from "../services/getResidents";
import './ResidentInfo.css';
import jarLoading from '../assets/img/jar-loading.gif';


function ResidentInfo({infoResident}){

    const [resident, setResident] = useState(false);

    useEffect(() => {
        getResidents(infoResident).then(req => {
            setResident(req.data)
        })
    }, [infoResident])
    
    return(
        <>  
            {
                (resident) ? <div className="container-resident">
                                <img src={resident.image} alt='imageresident'/>

                                <div className="container-resident-info">
                                    <p><b>Nombre:</b> {resident.name}</p>
                                    <p><b>Origen: </b> {resident.origin.name}</p>
                                    <p><b>Status:</b> {resident.status}</p>
                                    <p><b>Cant. Epis.</b> {resident.episode.length}</p>

                                </div>
                            </div>

                            : <img className="loader" src={jarLoading} alt='loading'/>
            }

        </>
    )
}


export default ResidentInfo;