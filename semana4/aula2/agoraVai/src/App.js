import React from 'react';
import './App.css';
import { BigCards } from './componentes/BigCard/BigCard';
import { PageSection } from './componentes/PageSection/PageSection';
import { SmallCard } from './componentes/SmallCard/SmallCard';
import { ImageButton } from './componentes/ImageButton/ImageButton';


const PageSectiondp = {
  titulo: "Dados Pessoais";
}

const BigCards = {
  img:"",
  titulo:"Bruno Pacheco",
  texto:"Olá, eu sou o Bruno ",
}

function App() {
  return (
    <div className="App">
      <div className="pageSection">
        <PageSection titulo={PageSectiondp.titulo} />
        <BigCards img={BigCards.imagem} titulo={BigCards.titulo} texto={BigCards.texto}/>
        <SmallCard />
        <SmallCard />
        <ImageButton />
      </div>
    </div>
  );
}

export default App;
