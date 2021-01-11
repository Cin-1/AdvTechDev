import React, {useContext} from 'react';
import { FirebaseContext } from '../firebase';
import { HistoricoContext } from '../Context/HistoricoContext';
import CardHistorico from '../components/CardHistorico';
import NavbarScroller from '../components/NavBar';


const Historico = () => {

    const { usuario } = useContext(FirebaseContext);
    const { historicoClima } = useContext(HistoricoContext)

    if (!usuario || !historicoClima ) return null
    console.log(historicoClima, "sdnd")

  return (
    <>
     <link rel= "stylesheet" href="output.css"/>
            <NavbarScroller/>
    <div className="flex flex-row ">
           
          {Object.entries(historicoClima).length !=0 ?  historicoClima.map((card) => (
        <CardHistorico  key={card.current.dt} card={card} />
      )): null}
    </div>
    </>
  );
};

export default Historico;
