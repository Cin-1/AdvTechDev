import firebase, { FirebaseContext } from '../firebase';
import useAutenticacion from '../hooks/useAutenticacion';
import CiudadesProvider from "../Context/CiudadesContext"
import HistoricoProvider from '../Context/HistoricoContext';

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
            <HistoricoProvider>
           
            <Component {...pageProps} />
            </HistoricoProvider>
            </CiudadesProvider>
        </FirebaseContext.Provider>
    )
}

export default MyApp;