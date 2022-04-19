// Llamado inicial que se hace en el home de la página
import axios from "axios";


export default async function getInit(type){
    
    const URL = `https://rickandmortyapi.com/api/location/${type}`;
    const res = await axios.get(URL);
    return res
}