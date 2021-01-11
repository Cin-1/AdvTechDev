import axios from "axios";
import React, { createContext, useState, useEffect } from "react";


export const HistoricoContext = createContext();

const HistoricoProvider = (props) => {

  const [historicoClima, guardarHistorico] = useState({});

  const [consultah, guardarConsultaH] = useState(false);

  const [busqueda, buscarCiudad] = useState({
    lat: "",
    long: "",
    time:[]
  });
  const { lat, long } = busqueda;
  
  
useEffect(() => {
    if(lat){
    const consultarAPI = async()=>{
    const api : string = "814ffac8bd9efbdbcf10f5922311e6ba";
    let hora = (Math.floor(Date.now() / 1000))
    const datos =[]

    try {
    for (let i = 0; i < 5; i++) {
      hora=hora-86400
    const url : string =`https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${long}&dt=${hora}&appid=${api}`
    const respuesta = await axios.get(url);
    datos.push(respuesta.data)
    guardarHistorico(datos)
    }
    }
    catch(err){
    console.log(err)
  }
  }
     consultarAPI() 
  }
   } , [consultah, lat]);
  
  return (
    <HistoricoContext.Provider value={{ guardarConsultaH, historicoClima, buscarCiudad }}>
      {props.children}
    </HistoricoContext.Provider>
  );
};
export default HistoricoProvider;
