import React from 'react';
import Primeiro from './components/PokeAPI/primeiro.js';
import Segundo from './components/PokeAPI/segundo.js'
import Terceiro from './components/PokeAPI/terceiro.js'
import axios from 'axios';
import styled from 'styled-components';


class App extends React.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }
  render(){
    return (
      <div className="App">
        <Primeiro />
        <Segundo />
        <Terceiro />
      </div>
    );
  }
}

export default App;
