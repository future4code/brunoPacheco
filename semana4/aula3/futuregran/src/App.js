import React from 'react';
import './App.css';
import Autor from './componentes/Autor/Autor';
import Foto from './componentes/Foto/Foto';
import CurtirEComentar from './componentes/CurtirEComentar/CurtirEComentar';

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