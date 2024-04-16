import React from 'react';

const Cards = ({ weather }) => {

    //CHAT GPT (ERROR AL APRETAR EL B OTON BUSCAR00000000000000000000000000++
        
    )
    if (!weather || !weather.main || !weather.main.temp) {
        return <div>No hay datos de temperatura disponibles</div>;
    }

    return (
        <>
            <div className='textsCard'>
                <p>30/01/2024</p>
                <p>nubes dispersas</p>
                <p>{weather.main.temp}°C</p>
            </div>
        </>
    );
}

export default Cards;

