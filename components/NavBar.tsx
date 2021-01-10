import React, { useContext, useState } from 'react';
import Link from 'next/link';
import { FirebaseContext } from '../firebase';



const NavbarScroller = () => {

    const { usuario, firebase } = useContext(FirebaseContext);
    
    const [city, setCity] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        setCity('');
    }
    return ( 
        <nav className="bg-gray-800">
              <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">

            <div className="flex-shrink-0 flex items-center">
                
          <Link href="/">
          <button className="text-gray-300 hover:bg-gray-800 hover:text-white px-4 py-4 rounded-md text-sm font-medium">Inicio</button>
          </Link>
        </div>
      
            {usuario && ( 
                <div className="flex-shrink-0 flex items-center">
                     <div className="pt-2 relative mx-auto text-gray-600">
                <form onSubmit={(e) => {handleSubmit}}>
                    <input className=" h-10 px-1 rounded mb-1 focus:outline-none focus:shadow-outline text-l px-8 shadow-lg"
                      type="text"
                      placeholder="Ingrese el nombre de la ciudad"
                      value={city}
                      onChange={e => setCity(e.target.value)}
                    />
                    <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-2" type="submit" value="Buscar" />
                  </form>
                  </div>
                  </div>

            )}
            
                 <div className="flex-shrink-0 flex items-center">

                    { usuario ? (
                        <>
                            <p className="text-gray-300  py-2 rounded-md text-sm font-medium m-2 mr-8 ">
                                Hola: {usuario.displayName} </p>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                                onClick={() => firebase.cerrarSesion() }
                            >Cerrar Sesión</button>
</>
                    ) : (
                        <>
                            <Link href="/login">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-2"
                                >Login</button>
                            </Link>
                            <Link href="/crear-cuenta">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Crear Cuenta</button>
                            </Link>
                        </>
                    ) }
                </div>
                </div>
                </div>
        </nav>
     );
}
export default NavbarScroller