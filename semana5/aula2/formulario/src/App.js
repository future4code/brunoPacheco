import React from 'react';
import Etapa1 from './Etapa1';
import Etapa2 from './Etapa2';
import Etapa3 from './Etapa3';
import EtapaFinal from './EtapaFinal';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <Etapa1 />
        <Etapa2 />
        <Etapa3 />
        <EtapaFinal />
      </div>
    );
  }
}

export default App;
