import React from 'react';

export class Etapa1 extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      nome: "" ,
      idade:"" ,
      email:"",
      escolaridade:"",
    }
  }

  mudouNome = (event) => {
    this.setState({nome: event.target.value});
  }

  mudouIdade = (event) => {
    this.setState({idade: event.target.value});
  }

  mudouEmail = (event) => {
    this.setState({email: event.target.value});
  }

  mudouEscolaridade = (event) => {
    this.setState({escolaridade:event.target.value});
  }

  onClickSalvarRespostas = () => {
    const novaResposta ={
      nome:this.state.nome,
      idade:this.state.idade ,
      email:this.state.email,
      escolaridade:this.state.escolaridade ,
    }
  }

  render(){
    return(
      <div>
        <h2>Etapa 1</h2>
        <label>Nome: </label>
        <input 
          type="text"
          value={this.state.nome}
          onChange={this.mudouNome}
        />
        <label>Idade: </label>
        <input 
          type="text"
          value={this.state.idade}
          onChange={this.mudouIdade}
        />
        <label>E-mail: </label>
        <input 
          type="email"
          value={this.state.email}
          onChange={this.mudouEmail}
        />
        <label>Qual o grau de Escolaridade: </label>
        <select 
          id="escolaridade"
          value={this.state.escolaridade}
          onChange={this.mudouEscolaridade}
        >
          <option 
            value="medioIncompleto">
            Ensino Médio Incompleto
          </option>
          <option 
            value="medioCompleto">
            Ensino Médio Completo
          </option>
          <option 
            value="supIncompleto">
            Ensino Superior Incompleto
          </option>
          <option 
            value="supCompleto">
            Ensino Superior Completo
          </option>
        </select>
        <button 
        onClick={this.onClickSalvarRespostas} 
        >Continuar
        </button>
      </div>
    );
  }
}

export default Etapa1;