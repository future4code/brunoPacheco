import React from 'react';
import './App.css';
import Autor from './componentes/autor/Autor';
import Foto from './componentes/foto/Foto';
import CurtirEComentar from './componentes/curtirEcomentar/CurtirEComentar';

function App() {
  return (
    <div className="App">
      <section>
        <Autor />
        <hr/>
        <Foto />
        <hr/>
        <CurtirEComentar />
      </section>
    </div>
  );
}

export default App;
