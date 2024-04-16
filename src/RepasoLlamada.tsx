import { useState } from "react";

const useProduct = () =>{
    const [isLoading, setIsLoading] useState(false);

    const getProducts = async() =>{
        setIsLoading(true)

        try{
            const respuesta = await fetch('URL');
            const data = respuesta.json();

            return data;
        } catch(error){
        throw error;
        } finally{
            setLoading(false)
        }
    }

    return{isLoading, getProducts}
}

import useProduct from ...

const Home = () => {
    const {isLoading, getProducts} = useProduct();
    const [products, setProducts] = useState('');

    const callApi = async(e)=>{
        e.preventDefault();

        try{
            const respuesta = await getProducts();
            setProducts(respuesta)
        } catch (error){
            throw error;
        }




    }



}