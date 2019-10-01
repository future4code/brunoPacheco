import React from 'react';
import './App.css';
import { BigCards } from './componentes/BigCard/BigCard';

function App() {
  return (
    <div className="App">
      <div className="pageSection">
        <BigCards />
        <SmallCard />
        <SmallCard />
        <ImageButton />
      </div>
    </div>
  );
}

export default App;
