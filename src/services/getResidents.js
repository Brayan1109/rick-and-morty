import axios from 'axios'

async function getResidents(url){
    const res = await axios.get(url);

    return res;
}


export default getResidents;