import React, { useState } from 'react';
import Router from 'next/router';
import firebase from '../firebase';
import useValidacion from '../hooks/useValidacion';
import validarIniciarSesion from '../validacion/validarIniciarSesion';
import NavbarScroller from '../components/NavBar';


interface STATE_INICIAL {
  email?: string,
  password?: string,
}

const Login = () => {
  
  let STATE_INICIAL = {} as STATE_INICIAL;
  const [ error, guardarError] = useState(false);

  const { valores, errores, handleSubmit, handleChange } = useValidacion(STATE_INICIAL, validarIniciarSesion, iniciarSesion);

  const { email, password } = valores;

  async function iniciarSesion() {
    try {
      await firebase.login(email, password);
      console.log("exito")
      Router.push('/');
    } catch (error) {
      console.error('Hubo un error al autenticar el usuario ', error.message);
      guardarError(error.message);
    }
  }

    return (
    <div className="mb-18 ">
    <link rel= "stylesheet" href="output.css"/>
      <NavbarScroller/>
      <div className="mx-auto">
      <div className="max-w-sm mx-auto my-24 bg-white px-5 py-10 rounded shadow-xl bg-blue-200">
        <div className="text-center mb-8">
          <h1 className="font-bold text-2xl font-bold">Login</h1>
        </div>          
        {error && <p className="flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-md text-red-700 bg-red-100 border border-red-300 ">{error}</p> }

        <form
            onSubmit={handleSubmit}
            noValidate
          >  
              <div className="mt-5">
                  <label htmlFor="email">Email</label>
                  <input 
                       className="block w-full p-2 border rounded border-gray-500"
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={handleChange}
                  />
              </div>
              {errores.email && <p className="flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-md text-red-700 bg-red-100 border border-red-300 ">{errores.email}</p> }

  
              <div className="mt-5">
                  <label htmlFor="password">Password</label>
                  <input 
                      className="block w-full p-2 border rounded border-gray-500"
                      type="password"
                      id="password"
                      name="password"
                      value={password}
                      onChange={handleChange}
                  />
              </div>
              {errores.password && <p className="flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-md text-red-700 bg-red-100 border border-red-300 ">{errores.password}</p> }


              <div className="mt-10">
                <input className="py-3 bg-blue-700 hover:bg-blue-500 rounded text-white text-center w-full cursor-pointer"
                type="submit"
                value="Iniciar Sesión"
              />
              </div>
          </form>
          </div>
        </div>
        </div>
  )
}

export default Login