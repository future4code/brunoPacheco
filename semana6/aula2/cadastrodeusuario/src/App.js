import React from 'react';
import './App.css';
import FichaDeCadastro from './componentes/fichaDeCadastro'
import ListaDeUsuarios from './componentes/listaDeUsuarios'


const usuario = {
  name:"Bruno",
  email:"bruno@gmail.com"
}

export class App extends React.Component  {
  constructor(props){
    super(props)
    this.state={
      paginaAtual:"Cadastro de Usuário",
      textoDoBotao:"Lista de Usuários"
    }
  }

  clicarNoBotao = () => {
    if(this.state.paginaAtual === "Cadastro de Usuário"){
      this.setState({
        paginaAtual:"Lista de Usuário",
        textoDoBotao:"Voltar"
      })
    }else{
      this.setState({
        paginaAtual:"Cadastro de Usuário",
        textoDoBotao:"Lista de Usuários"
      })
    } 
  }

  render(){
    return (
      <div className="App">
        <section>
          {
            this.state.paginaAtual === "Cadastro de Usuário" ? <FichaDeCadastro/> : <ListaDeUsuarios />
          }
          <button onClick={this.clicarNoBotao}>{this.state.textoDoBotao}</button>
        </section>
      </div>
    );
    }
}

export default App;
