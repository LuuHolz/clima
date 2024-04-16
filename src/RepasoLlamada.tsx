//HOOK
import {useState} from 'react'

const useRepaso = () => {
    const [isLoading, setIsLoading] = useState(false);

   

        const getRepaso = async() =>{
            setIsLoading(true);
        try{
            const respuesta = await fetch(URL);
            const data = respuesta.json();

            return data
        }catch(error) {
            throw error;
        } finally{
            setIsLoading(false)
        }
    }

  return {
    isLoading, getRepaso
  }
}

export default useRepaso



//LLAMADA
import {useState} from 'react'

const Home = () => {
    const {isLoading, getRepaso} = useRepaso();
    const [productos, setProductos] = useState('');

    const callAPI = async(e) =>{
        e.preventDefault();

        try{
            const respuesta = await getRepaso(productos);
            setProductos(respuesta)
        } catch(error){
            throw error;
        }
    };



  return (
    <div>
      
    </div>
  )
}

export default Home
