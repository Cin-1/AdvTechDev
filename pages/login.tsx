import React, { useState } from 'react';
import Router from 'next/router';
import firebase from '../firebase';
import useValidacion from '../hooks/useValidacion';
import validarIniciarSesion from '../validacion/validarIniciarSesion';


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
    <div>
        <>
          <h1>Iniciar Sesión</h1>
          <form
            onSubmit={handleSubmit}
            noValidate
          >  
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


  
              <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-2"
                type="submit"
                value="Iniciar Sesión"
              />
          </form>
        </>
    </div>
  )
}

export default Login