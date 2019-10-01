import React from 'react';
import './App.css';
import { Header } from './componentes/Header/Header';
import { Footer } from './componentes/Footer/Footer';
import { VideoCard } from './componentes/VideoCard/VideoCard';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <VideoCard image={} titulo={}/>
        <VideoCard image={} titulo={}/>
        <VideoCard image={} titulo={}/>
        <VideoCard image={} titulo={}/>
        <VideoCard image={} titulo={}/>
        <VideoCard image={} titulo={}/>
        <VideoCard image={} titulo={}/>
        <VideoCard image={} titulo={}/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
