import Head from "next/head";


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

      <main>
        <h1 style={{ fontFamily: "Roboto Slab" }}>Clima App</h1>

      </main>

      <footer style={{ fontFamily: "Roboto Slab" }}>Footer aqui </footer>
    </div>
  );
}
