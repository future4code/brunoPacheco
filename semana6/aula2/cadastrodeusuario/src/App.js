import React from 'react';
import './App.css';
import Titulo from './componentes/titulo/titulo'
import BotaoVoltar from './componentes/botaoVoltar/botaoVoltar'
import Cadastrar from './componentes/formulario/botaoCadastrar/botaoCadastrar'

const usuarioCadastrar = {
  name:"Bruno",
  email:"bruno@gmail.com"
}

const listaDeUsuarios = [
  {
    id:"id1",
    nome:"Bruno"
  }
]

export class App extends React.Component  {
  constructor(props){
    super(props)
    this.state={

    }
  }

  render(){
    return (
      <div className="App">
        <header>
          <Titulo />
        </header>
        <section>
          <Cadastrar />
          <BotaoVoltar />
        </section>
      </div>
    );
    }
}

export default App;
