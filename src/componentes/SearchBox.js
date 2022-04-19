import { useState } from 'react'
import img_search from '../assets/img/img_search.png'
import './SearchBox.css';

export default function SearchBox({setLocation}){

    const [onChangeLocation, setOnChangeLocation] = useState('');
    const [type, setType] = useState('')

    const handlerLocation = (e) =>{
        setOnChangeLocation(e.target.value)
    }

    const searchByType = () => {
        let optUrl = type + onChangeLocation;
        setLocation(optUrl);
    }

    return(
        <div className='container'>
            <label htmlFor="search"> <img className='image' src={img_search} alt='imagesearch' /> </label>
            <input className='input-search' id="search" type="text" onChange={handlerLocation}/>
            <button className='button-search' onClick={() => {
                searchByType()
            }}>Buscar</button>

            <select name='type' onChange={e => setType(e.target.value)} defaultValue='id'>
                <option value=''> id </option>
                <option value='?name='> name </option>
                <option value='?type='> type </option>
                <option value='?dimension='> dimensión </option>
            </select>


        </div>
    )
}