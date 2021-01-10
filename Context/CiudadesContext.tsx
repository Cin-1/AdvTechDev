import axios from "axios";
import React, { createContext, useState, useEffect } from "react";


export const CiudadesContext = createContext();

const CiudadesProvider = (props) => {

  const [error, guardarError] = useState(false)

  const [ciudadClima, guardarCiudad] = useState({});

  const [consulta, guardarConsulta] = useState(false);

  const [busqueda, buscarCiudad] = useState({
    ciudad: "",
    pais: "",
  });


  const { ciudad, pais } = busqueda;
  
  useEffect(() => {
    if(ciudad){
    const consultarAPI = async()=>{
    const api : string = "814ffac8bd9efbdbcf10f5922311e6ba";
    const url : string =`http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${api}`
    const respuesta = await axios.get(url);
    guardarCiudad(respuesta.data)
    guardarConsulta(false)
    if(respuesta.data.cod === '404'){
      guardarError(true)
    }else{
      guardarError(false)
    }
    }
  
     consultarAPI() 
  }
   } , [ consulta, ciudad]);
   let component;
   if(error){
     component=<p>No hay resultados</p>
   }else{
     component = null
   }
 
  return (
    <CiudadesContext.Provider value={{ buscarCiudad, guardarConsulta, ciudadClima, component }}>
      {props.children}
    </CiudadesContext.Provider>
  );
};
export default CiudadesProvider;
