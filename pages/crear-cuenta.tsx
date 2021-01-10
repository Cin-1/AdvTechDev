import React, { useState } from 'react';
import Router from 'next/router';
import firebase from '../firebase';
import useValidacion from '../hooks/useValidacion';
import validarCrearCuenta from '../validacion/validarCrearCuenta';

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
    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
        <>
          <h1 >Crear Cuenta</h1>
          <form
            onSubmit={handleSubmit}
            noValidate
          >
              <div>
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="nombre">Nombre</label>
                  <input 
                      type="text"
                      id="nombre"
                      placeholder="Tu Nombre"
                      name="nombre"
                      value={nombre}
                      onChange={handleChange}
                  />
              </div>
              {errores.nombre && <p>{errores.nombre}</p> }


  
              <div>
                  <label htmlFor="email">Email</label>
                  <input 
                      type="email"
                      id="email"
                      placeholder="Tu Email"
                      name="email"
                      value={email}
                      onChange={handleChange}
                  />
              </div>
              {errores.email && <p>{errores.email}</p> }

  
              <div>
                  <label htmlFor="password">Password</label>
                  <input 
                      type="password"
                      id="password"
                      placeholder="Tu Password"
                      name="password"
                      value={password}
                      onChange={handleChange}
                  />
              </div>
              {errores.password && <p>{errores.password}</p> }


  
              <input  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-2"
                type="submit"
                value="Crear Cuenta"
              />
          </form>
        </>
    </div>
  )
}

export default CrearCuenta