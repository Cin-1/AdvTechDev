import React, { useContext, useState } from 'react';
import { FirebaseContext } from '../firebase';
import { CiudadesContext } from '../Context/CiudadesContext';


const Buscador = () => {

    const { usuario } = useContext(FirebaseContext);
    const {  buscarCiudad, guardarConsulta } = useContext(CiudadesContext)
    const [busqueda, guardarBusqueda] = useState({
        ciudad: "",
        pais: "",
      });
    
    const {ciudad, pais} = busqueda
    const [error, guardarError] = useState(false);

    const handleChange =e=>{
           guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (ciudad === "" || pais==="") {
            guardarError(true);
            return;
          }
          guardarError(false);
          guardarConsulta(true); 
          buscarCiudad(busqueda)
          guardarBusqueda({
            ciudad: "",
            pais: "",})

        }

return(

<div className="container mx-auto mt-30 h-48 flex flex-wrap content-center">
<div className="mx-auto flex flex-wrap max-width-form text-gray-800">

    {usuario && ( 
        <div className="h-48 flex flex-wrap content-center">
             <div className="pt-2 relative mx-auto text-gray-600">
        <form onSubmit={handleSubmit}>
        <div className="flex flex-100">
        <div className="flex-grow mr-4">

            <input className="bg-gray-300 w-full rounded-lg py-3 px-3 shadow-inner " 
              type="text"
              placeholder="Ingrese el nombre de la ciudad"
              onChange={handleChange}
              name="ciudad"
              id="ciudad"
              value={ciudad}
              />
              </div>
              <div className="flex-grow mr-4">

              <select className="bg-gray-300 w-full rounded-lg py-3 px-3 shadow-inner"  name="pais" value={pais} onChange={handleChange}>
                  <option value=""> Seleccione un país</option>
                  <option value="AR"> Argentina</option>
                  <option value="PE"> Perú</option>
                  <option value="CO"> Colombia</option>
                  <option value="UR"> Uruguay</option>
                  <option value="EC"> Ecuador</option>
                  <option value="UY"> Uruguay</option>
                  <option value="BR"> Brasil</option>
                  <option value="US"> Estados Unidos</option>
                  <option value="CL"> Chile</option>
                  <option value="ES"> España</option>
                  <option value="MX"> México</option>

              </select>
              </div>

            <input className="bg-blue-500 hover:bg-blue-700 text-white flex-50 font-bold py-2 px-4 rounded-lg cursor-pointer " type="submit" value="Buscar" />
          </div>
          </form>
          {error ? <p className="flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-md text-yellow-700 bg-yellow-100 border border-yellow-300 ">Ingrese un valor </p>: null}
          </div>
          </div>

    )}
              </div>
    </div>

)
};

export default Buscador