import firebase, { FirebaseContext } from '../firebase';
import useAutenticacion from '../hooks/useAutenticacion';
import CiudadesProvider from "../Context/CiudadesContext"


const MyApp = props => {
    const usuario = useAutenticacion();
    const { Component, pageProps } = props;

    return (
        <FirebaseContext.Provider
            value={{
                firebase,
                usuario
            }}
        >
            <CiudadesProvider>
           
            <Component {...pageProps} />
            </CiudadesProvider>
        </FirebaseContext.Provider>
    )
}

export default MyApp;