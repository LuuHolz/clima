
const Cards = ({ weather }) => {

    //CHAT GPT (ERROR AL APRETAR EL BOTON BUSCAR)
    if (!weather || !weather.main || !weather.main.temp) {
        return <div className='noData'>No hay datos de temperatura disponibles</div>;
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

