import { useEffect, useState } from 'react';
import './App.css';
import LocationContainer from './componentes/LocationContainer';
import ResidentContainer from './componentes/ResidentContainer';
import SearchBox from './componentes/SearchBox';
import getByType from './services/getByType';
import portada from './assets/img/portada.png'

function App() {

  const [location, setLocation] = useState('3');
  const [data, setData] = useState({});

  useEffect(()=> {
    console.log(location)
    getByType(location).then(req => {
      setData(req.data)
    })

  },[location])

  return (
    <div className="App">


          <div className='container-image-portada'>
            <img src={portada} alt='Portada'/>
            
          </div>
        <section className='container-background-image' >
          <div className='container-opacity'>
            <SearchBox location={location} setLocation={setLocation}/>
            <LocationContainer data={data}/>
            <ResidentContainer residents={(data.residents)} />
          </div>
        </section>

    </div>
  );
}

export default App;
