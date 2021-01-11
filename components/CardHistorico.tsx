import React, { useContext, useState } from "react";
import { FirebaseContext } from '../firebase';

const CardHistorico = ({card}) => {
    const { usuario } = useContext(FirebaseContext);
    
    if (!usuario ) return null

      return (
    <div className="flex flex-nowrap" >
      <div className= "flex-auto">
      <div className='mt-6 text-center font-medium'>
      <h2 className="mt-4 text-center font-medium" >Fecha: {card.current.dt} </h2>
           <p >{(card.current.temp - 273.15, 10).toFixed(2)+' ° C'}</p>
           <img className='m-auto' src={`http://openweathermap.org/img/wn/${card.current.weather[0].icon}@2x.png`}/>
        </div>
    <div>
    <p className="mt-2 text-center font-medium">La humedad fue de:</p>
    <p className='mt-1 text-center font-medium'>{card.current.humidity +'%'}</p>
    </div>
    <div>
         <p className="mt-2 text-center font-medium">Viento a:</p>
         <p className='mt-1 text-center font-medium mb-2'>{card.current.wind_speed+'km/h'}</p>
         </div>
     </div>
    </div>
  );
};

export default CardHistorico;
