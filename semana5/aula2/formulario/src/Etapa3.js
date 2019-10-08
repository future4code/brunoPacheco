import React from 'react';



export class  Etapa3 extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      terminouOCurso: "" ,
      cursoComplementar:"" ,
    }
  }

  mudouTerminouOCurso = (event) => {
    this.setState({terminouOCurso:event.target.value});
  }

  mudouCursoComplementar = (event) => {
    this.setState({cursoComplementar:event.target.value});
  }

  onClickSalvarRespostas = () => {
    const novaResposta ={
      terminouOCurso:this.state.terminouOCurso,
      cursoComplementar:this.state.cursoComplementar,
    }
  }

  render(){
    return(
      <div>
        <h2>Etapa 3</h2>
        <label>Por que você não terminou o curso de graduação? </label>
        <input 
          type="text"
          value={this.state.terminouOCurso}
          onChange={this.terminouOCurso}
        />
        <select 
          id="cursoComplementar"
          value={this.state.cursoComplementar}
          onChange={this.cursoComplementar}
        >
          <option 
            value="cursoTecnico">
            Curso técnico
          </option>
          <option
            value="cursoDeIngles">
            Cursos de inglês
          </option>
          <option
            value="semCursoComplementar">
            Não fiz nem curso complementar
          </option>
        </select>
        <button
        onClick={this.onClickSalvarRespostas}
        >Finalizar
        </button>
      </div>
    );
  }
}

export default Etapa3;