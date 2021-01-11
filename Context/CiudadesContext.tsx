import axios from "axios";
import React, { createContext, useState, useEffect } from "react";


export const CiudadesContext = createContext();

const CiudadesProvider = (props) => {

  const [errorbuscando, guardarError] = useState("");

  const [ciudadClima, guardarCiudad] = useState({});

  const [consulta, guardarConsulta] = useState(false);

  const [busqueda, buscarCiudad] = useState({
    ciudad: "",
    pais: "",
  });

  const { ciudad, pais } = busqueda;
  
  useEffect(() => {
    if(ciudad){
    guardarError("")
    const consultarAPI = async()=>{
    const api : string = "814ffac8bd9efbdbcf10f5922311e6ba";
    try {const url : string =`http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${api}`
    const respuesta = await axios.get(url);
    guardarCiudad(respuesta.data)
    guardarConsulta(true)
    }
    catch(err){
    console.log(err)
    guardarError('Ciudad no encontrada')
    guardarConsulta(false)
  }
  }
   consultarAPI() 
  }
   } , [ consulta, ciudad]);
  return (
    <CiudadesContext.Provider value={{ buscarCiudad, guardarConsulta, ciudadClima, errorbuscando }}>
      {props.children}
    </CiudadesContext.Provider>
  );
};
export default CiudadesProvider;
