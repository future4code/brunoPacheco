import React from 'react';
import PokeAPI from './components/PokeAPI';
import axios from 'axios';
import styled from 'styled-components';


function App() {
  return (
    <div className="App">
      <PokeAPI />
    </div>
  );
}

export default App;
