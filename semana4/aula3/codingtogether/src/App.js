import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      valor1:'',
      valor2:'',
      valor3:'',
      mostraTitulo:false,
    }
  }

  onChangeValue1 = (event) => {
    const valorNovo = event.target.value;
    const novoEstado = {
      valor1: valorNovo,
    }

    this.setState(novoEstado);
  }

  onChangeValue2 = (event) => {
    const valorNovo = event.target.value;
    const novoEstado = {
      valor2: valorNovo,
    }

    this.setState(novoEstado);
  }

  onChangeValue3 = (event) => {
    const valorNovo = event.target.value;
    const novoEstado = {
      valor3: valorNovo,
    }

    this.setState(novoEstado);
  }


  onCLickButtonTitulo = () =>{
    const mostratituloAtual = this.state.mostraTitulo;

    const novoEstado = {
      mostraTitulo:!mostratituloAtual
    }

    this.setState(novoEstado)
  }


  render(){
    let titulo;

    if(this.state.mostraTitulo ===true){
      titulo = (<h1>Oi! Eu sou um título</h1>)
    }

    return (
    <div className="App">
      
      <button onClick></button>
      <hr/>
      <input placeholder="Valor 1" type="text" onChange={this.onChangeValue1} />
      <input placeholder="Valor 1" type="text" onChange={this.onChangeValue2} />
      <input placeholder="Valor 1" type="text" onChange={this.onChangeValue3} />
      <hr/> 
      <h1>{this.state.valor1}</h1>
      <h2>{this.state.valor2}</h2>
      <h3>{this.state.valor3}</h3>
      <hr/>
      <button onclick={this.onCLickButtonTitulo}>Mostra Título</button>
      {titulo}

    </div>
    );
  }
}

export default App;
