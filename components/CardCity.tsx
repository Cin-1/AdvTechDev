import React, { useContext, useState } from "react";
import { FirebaseContext } from '../firebase';
import { CiudadesContext } from '../Context/CiudadesContext';
import { HistoricoContext } from '../Context/HistoricoContext';
import Router from 'next/router';



const Card = () => {

    const { usuario } = useContext(FirebaseContext);
    const {  ciudadClima } = useContext(CiudadesContext)
    const {  guardarConsultaH, buscarCiudad } = useContext(HistoricoContext)

    const {name, main, wind, weather, coord}= ciudadClima
    if (!name || !usuario ) return null

    const icon : string = weather[0].icon

    const handleSubmit = e => {
      e.preventDefault();
        guardarConsultaH(true); 
        buscarCiudad({
          lat: coord.lat,
          long: coord.lat,
        })
        guardarConsultaH(false); 
        Router.push('/historico');

      }

  return (
    <div className="container mx-auto mt-30 h-48 flex flex-wrap content-center pb-8 mt-16 shadow-inner " >
      <div className="mx-auto flex flex-wrap max-width-form text-gray-800">

      <div className="bg-gray-300 rounded overflow-hidden shadow-md m-9 items-center" >
       <h2 className="mt-8 text-center font-medium" >El clima en {name} es de:</h2>
         <div className='mt-2 text-center font-medium'>
           <p >{(main.temp - 273.15).toFixed(2)+' ° C'}</p>
           <img className='m-auto' src={`http://openweathermap.org/img/wn/${icon}@2x.png`}/>
        </div>
    <div>
    <p className="mt-2 text-center font-medium">La humedad es de:</p>
    <p className='mt-1 text-center font-medium'>{main.humidity +'%'}</p>
    </div>
       <div>
         <p className="mt-2 text-center font-medium">Viento a:</p>
         <p className='mt-1 text-center font-medium mb-2'>{wind.speed+'km/h'}</p>
      </div>
         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl m-2">
               Agregar a favoritos</button>
         <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl mr-2">
           Ver histórico</button>
     </div>
    </div>
    </div>
  );
};

export default Card;
