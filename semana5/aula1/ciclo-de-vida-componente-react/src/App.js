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

function CaixaDeTarefas(){
  <div className="container">
    <input 
      type="text" 
      placeholder="Insira sua Tarefa"
    />
    <button onClick="">Criar Tarefa </button>
    <div className="lista de tarefas">
      <ul>

      </ul>
    </div>
    <hr/>
    <div className="tarefas concluídas">
      <button onClick="">Excluir Tarefa</button>
      <ul>

      </ul>
    </div>
  </div>
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={

    }
  }
  
  render() {
    return (
      <Raiz>
        <CaixaDeTarefas/>
      </Raiz>
    );
  }
}

export default App;
