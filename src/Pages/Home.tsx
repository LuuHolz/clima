// Home.tsx
import { useState } from 'react';
import useWeather from '../Hooks/useWeather.tsx';
import imgCiudad from '../assets/ciudad.jpg';
import Card from '../Components/Cards';
import { DataWeather } from "../Types/Weather.type";

const Home = () => {
  const { isLoading, getWeather } = useWeather();
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState<DataWeather>(null);

  const apiCall = async (e) => {
    e.preventDefault();
    
    try {
      const response = await getWeather(location); 
      setWeather(response)
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className='principlaContainer'>
      <div className='container'>
        <div className='leftContainer'>
          <img src={imgCiudad} alt="ciudad" className='imgCiudad' />
          <div className='textsImg'>
            <p>Madrid</p>
            <p>29/01/2024</p>
            <p>25°</p>
            <p>cielo claro</p>
          </div>
        </div>

        <div className='rightContainer'>
          <div className='buscador'>
            <div>
              <p className='textBuscar'>Buscar ciudad</p>
            </div>
            <div className='inputBuscar'>
              <form onSubmit={(e) => apiCall(e)}>
                <label htmlFor="">
                  <input type="text" onChange={(e) => setLocation(e.target.value)} value={location} />
                </label>
                <button className='buttonBuscar'>Buscar</button>
              </form>
            </div>
          </div>

          <div className='topContainer'>
            <p>Temperatura maxima: 17°C</p>
            <p>Temperatura minima: 10°C</p>
            <p>Sensacion termica: 15°C</p>
            <p>Humedad: 88%C</p>
            <p>Viento: 2.57m/s</p>
          </div>
          <hr />

          <div className='bottomContainer'>
            {weather !== null ? (
              <Card weather={weather} />
            ) : (
              <div className="noData">No se encontraron datos meteorológicos</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;




