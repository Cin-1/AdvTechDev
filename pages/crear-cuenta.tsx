import React, { useState } from 'react';
import Router from 'next/router';
import firebase from '../firebase';
import useValidacion from '../hooks/useValidacion';
import validarCrearCuenta from '../validacion/validarCrearCuenta';
import NavbarScroller from '../components/NavBar';

const STATE_INICIAL = {
  nombre: '',
  email: '',
  password: ''
}
 
const CrearCuenta = () => {

  const [ error, guardarError] = useState(false);

  const { valores, errores, handleSubmit, handleChange } = useValidacion(STATE_INICIAL, validarCrearCuenta, crearCuenta);

  const { nombre, email, password } = valores;

  async function crearCuenta() {
    try {
      await firebase.registrar(nombre, email, password);
      Router.push('/');
    } catch (error) {
      console.error('Hubo un error al crear el usuario ', error.message);
      guardarError(error.message);
    }
  }
  return (
<div>
    <link rel= "stylesheet" href="output.css"/>

      <NavbarScroller/>
      <div className="mx-auto ">
      <div className="max-w-sm mx-auto my-24 bg-white px-5 py-10 rounded shadow-xl bg-blue-200">
        <div className="text-center mb-4">
          <h1 className="font-bold text-2xl font-bold">Registrarse</h1>
        </div>          
        {error && <p>{error}</p> }

        <form
            onSubmit={handleSubmit}
            noValidate
          >  
              <div className="mt-2">
                  <label  htmlFor="nombre">Nombre</label>
                  <input 
                     className="block w-full p-2 border rounded border-gray-500"
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={nombre}
                      onChange={handleChange}
                  />
              </div>
              {errores.nombre && <p>{errores.nombre}</p> }


  
              <div className="mt-2">
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
              {errores.email && <p>{errores.email}</p> }

  
              <div className="mt-2">
                  <label htmlFor="password">Password</label>
                  <input 
                      className="block w-full p-2 border rounded border-gray-500"
                      type="password"
                      id="password"
                      placeholder="+de 6 caracteres"
                      name="password"
                      value={password}
                      onChange={handleChange}
                  />
              </div>
              {errores.password && <p>{errores.password}</p> }


  
              <div className="mt-10">
                <input className="py-3 bg-blue-700 hover:bg-blue-500 rounded text-white text-center w-full cursor-pointer"
                type="submit"
                value="Crear Cuenta"
              />
              </div>
          </form>
          </div>
        </div>
        </div>
  )
}

export default CrearCuenta