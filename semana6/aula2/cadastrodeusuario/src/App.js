import React from 'react';
import './App.css';
import Titulo from './componentes/titulo/titulo'
import BotaoVoltar from './componentes/botaoVoltar/botaoVoltar'
import Cadastrar from './componentes/formulario/cadastrar/cadastrar'


function App() {
  return (
    <div className="App">
      <header>
        <Titulo />
      </header>
      <section>
        <BotaoVoltar />
        <Cadastrar />
      </section>
    </div>
  );
}

export default App;
