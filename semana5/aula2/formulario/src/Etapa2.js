import React from "react";

export class Etapa2 extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      curso: "" ,
      unidadeDeEnsino:"" ,
    }
  }

  mudouCurso = (event) => {
  this.setState({curso:event.target.value});
  }

  mudouUnidadeDeEnsino = (event) => {
  this.setState({UnidadeDeEnsino:event.target.value});
  }

  onClickSalvarRespostas = () => {
    const novaResposta ={
      curso:this.state.curso,
      unidadeDeEnsino:this.state.unidadeDeEnsino,
    }
  }

  render(){
    return (
      <div>
        <h2>Etapa 2</h2>
        <label>Qual o curso? </label>
        <input 
          type="text" 
          value={this.state.curso}
          onChange={this.mudouCurso}
        />
        <label>Qual a unidade de ensino? </label>
        <input 
          type="text" 
          value={this.state.unidadeDeEnsino}
          onChange={this.mudouUnidadeDeEnsino}
        />
        <button
        onClick={this.onClickSalvarRespostas}
        >Finalizar
        </button>
      </div>
    );
  }
};

export default Etapa2;
