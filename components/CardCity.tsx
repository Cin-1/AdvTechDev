import React, { useContext } from "react";
import { FirebaseContext } from '../firebase';
import { CiudadesContext } from '../Context/CiudadesContext';

const Card = () => {

    const { usuario } = useContext(FirebaseContext);
    const {  ciudadClima } = useContext(CiudadesContext)
    const {name, main, wind, weather}= ciudadClima
    if (!name) return null
    const icon : string = weather[0].icon

  return (
    <div>
    <h2>El clima en {name} es de:</h2>
    <div>
    <p>{(main.temp - 273.15, 10).toFixed(2)+' ° C'}</p>
    <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`}/>
    </div>
    <div>
    <p>La humedad es de:</p>
    <p>{main.humidity +'%'}</p>
    </div>
    <div>
    <p>Viento a:</p>
  <p>{wind.speed+'km/h'}</p>
    </div>
    <div>
        <button>Agregar a favoritos</button>
        <button>Ver historico (15 días)</button>

    </div>
    

    </div>
  );
};

export default Card;
