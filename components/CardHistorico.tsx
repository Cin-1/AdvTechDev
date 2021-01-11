import React, { useContext, useState } from "react";
import { FirebaseContext } from '../firebase';

const CardHistorico = ({card}) => {
    const { usuario } = useContext(FirebaseContext);
    
    if (!usuario ) return null

      return (
    <div className="container mt-30 h-48 flex flex-row pb-8 mt-10 shadow-inner " >
     <div className="mx-auto flex flex-wrap max-width-form text-gray-800">

      <div className="bg-gray-300 rounded overflow-hidden shadow-md m-4 pl-4 pr-4" >
      <h2 className="mt-8 text-center font-medium" >Fecha: {new Date(card.current.dt*1000).toLocaleDateString()} </h2>
         <div className='mt-2 text-center font-medium'>
           <p >{(card.current.temp - 273.15).toFixed(2)+' ° C'}</p>
           <img className='m-auto' src={`http://openweathermap.org/img/wn/${card.current.weather[0].icon}@2x.png`}/>
        </div>
    <div>
    <p className="mt-2 text-center font-medium">La humedad fue de:</p>
    <p className='mt-1 text-center font-medium'>{card.current.humidity +'%'}</p>
    </div>
         <p className="mt-2 text-center font-medium">Viento a:</p>
         <p className='mt-1 text-center font-medium mb-2'>{card.current.wind_speed+'km/h'}</p>
  </div>
  </div>
    </div>
  );
};

export default CardHistorico;
