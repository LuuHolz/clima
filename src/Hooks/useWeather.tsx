// useWeather.tsx
import { useState } from "react";

const useWeather = () => {
    const [isLoading, setIsLoading] = useState(false);

    const getWeather = async (location: string) => {
        const URL_API = `https://api.openweathermap.org/data/2.5/weather`;

        const params = {
            q: location,
            appid: "fd657707608bb8b5453c0ed0c8bcea86",
        };

        // Convertir el objeto de parámetros en una cadena de consulta
        const queryString = new URLSearchParams(params).toString();

        const url = `${URL_API}?${queryString}`;

        setIsLoading(true);

        try {
            const response = await fetch(url);
            const data = await response.json();

            return data;
        } catch (error) {
            throw error;
        } finally {
            setIsLoading(false);
        }
    };

    return {
        getWeather,
        isLoading
    };
}

export default useWeather;
