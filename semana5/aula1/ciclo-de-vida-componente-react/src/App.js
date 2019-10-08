import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Raiz = styled.body`
  background-color: orange;
`

const Container = styled.div`
  display=flex;
  flex-direction:columns;
  width:200px;
`

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      tarefaEmAndamento: [
        "iniciar tarefa",
      ],
      tarefaConcluida:[
        "tarefa finalizada",
      ],
    };
  }
  
  CaixaDeTarefas=()=> {
    return(
      <div className="container">
        <input 
          type="text" 
          placeholder="Insira sua Tarefa"
          value={this.state.tarefa}
          onChange={this.state.tarefaEmAndamento}   
        />
        <button onClick="">Criar Tarefa </button>
        <div className="lista de tarefas">
          <ul>
          </ul>
        </div>
        <hr/>
        <div className="tarefas concluídas">
          <button onClick={this.state.tarefaConcluida}>Excluir Tarefa</button>
          <ul>
          </ul>
        </div>
      </div>
    )
  }
  
  render() {
    return (
      <Raiz>
        <CaixaDeTarefas />
      </Raiz>
    );
  }
}

export default App;
