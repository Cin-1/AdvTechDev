import App from 'next/app';
import firebase, { FirebaseContext } from '../firebase';
import useAutenticacion from '../hooks/useAutenticacion';
import NavbarScroller from "../components/NavBar";


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
                    <NavbarScroller/>

            <Component {...pageProps} />
        </FirebaseContext.Provider>
    )
}

export default MyApp;