import { useState } from 'react';
import useWeather from '../Hooks/useWeather.tsx'
import imgCiudad from '../assets/ciudad.jpg'

const Home = () => {
  // const {isLoading, getWeather} = useWeather();

  // const apiCall = async (e) => {
  //   const [location, setLocation] = useState("");
  //   e.preventDefault();

  //   try{
  //     const response = await fetch getWeather(location)
  //   } catch (error){
  //     throw error
  //   }
  // }


  return (
    <div className='principlaContainer'>

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
        <div className='topContainer'>

        </div>

        <div className='bottomContainer'>

        </div>
      </div>
    </div>
  )
}

export default Home



