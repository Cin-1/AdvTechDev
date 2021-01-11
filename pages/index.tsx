import Head from "next/head";
import NavbarScroller from "../components/NavBar";
import Footer from '../components/footer';
import Buscador from '../components/Buscador';
import Card from '../components/CardCity';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Next App Clima</title>
        <link rel="icon" href="/Graphicloads-100-Flat-2-Cloud.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap"
          rel="stylesheet"
        />
        <link rel= "stylesheet" href="output.css"/>
        
        </Head>

      <main >
            <NavbarScroller/>
            <Buscador/>
            <Card/>
      </main>

    </div>
  );
}
