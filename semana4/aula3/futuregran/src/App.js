import React from 'react';
import './App.css';
import Autor from './componentes/Autor/Autor';
import Foto from './componentes/Foto/Foto';
import CurtirEComentar from './componentes/CurtirEComentar/CurtirEComentar';
import favorite from './icones/favorite.svg'
import comment_icon from './icones/comment_icon.svg'

const autorData = {
  imagem:"https://picsum.photos/200/200?v=1",
  titulo:"Bruno"
}

const fotoData = {
  imagem:"https://picsum.photos/200/200?v=2",
}

const curtirEComentarImg = {
  curtir:{favorite},
  comentar:{comment_icon}
}
function App() {
  return (
    <div className="appContainer">
      <Autor 
        imagem={autorData.imagem} 
        titulo={autorData.titulo}
      />
      <Foto 
        imagem={fotoData.imagem}/>
      <CurtirEComentar 
        curtir={curtirEComentarImg.curtir}
        comentar={curtirEComentarImg.comentar}
      />
    </div>
  );
}

export default App;