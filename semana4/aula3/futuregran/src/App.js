import React from 'react';
import './App.css';
import Autor from './componentes/Autor/Autor';
import Foto from './componentes/Foto/Foto';
import CurtirEComentar from './componentes/CurtirEComentar/CurtirEComentar';


const autorData = {
  imagem:"https://picsum.photos/200/200",
  titulo:"Bruno"
}

const fotoData = {
  imagem:"https://picsum.photos/200/200",
}

const curtirEComentarImg = {
  curtir:"",
  comentar:""
}
function App() {
  return (
    <div className="AppContainer">
      <Autor 
        imagem={autorData.imagem} 
        titulo={autorData.titulo}
      />
      <Foto 
      imagem={fotoData.imagem}/>
      <CurtirEComentar />
    </div>
  );
}

export default App;