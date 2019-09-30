import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <div className="logo">
            <h1>FutureTube</h1>
        </div>
        <div className="buscar">
           <input name="search" type="text" placeholder="buscar">
        </div>
      </header>
      <div className="container">
        <nav>
          <ul id="menu">
            <li><a href="/exDaTarde.html">Início</a></li>
            <li><a href="">Em alta</a></li>
            <li><a href="">Inscrições</a></li>
            <li><a href="">Originais</a></li>
            <li><a href="">Biblioteca</a></li>
            <li><a href="">Histórico</a></li>
          </ul>
        </nav>  
        <section>
            <a href="media1.html">
              <div className="media">
                <img src="/media/video1.png" alt="Media 1">
                <p>Media 1</p>
              </div>
            </a>
            <a href="media2.html" >
              <div className="media">
                <img src="/media/video2.png" alt="Media 2">
                <p>Media 2</p>
              </div>
            </a>
            <a href="media3.html">
              <div className="media">
                <img src="/media/video3.png" alt="Media 3">
                <p>Media 3</p>
              </div>
            </a>
            <a href="media4.html" >
              <div className="media">
                <img src="/media/video4.png" alt="Media 4">
                <p>Media 4</p>
              </div>
            </a>
            <a href="media5.html" >
              <div className="media">
                <img src="/media/video5.png" alt="Media 5">
                <p>Media 5</p>
              </div>
            </a>
            <a href="media6.html" >
              <div className="media">
                <img src="/media/video6.png" alt="Media 6">
                <p>Media 6</p>
              </div>
            </a>
            <a href="media7.html" >
              <div className="media">
                <img src="/media/video7.png" alt="Media 7">
                <p>Media 7</p>
              </div>
            </a>
            <a href="media8.html" >
              <div className="media">
                <img src="/media/video8.png" alt="Media 8">
                <p>Media 8</p>
              </div>
            </a>
        </section> 
      </div>  
      <footer>
        <h3>Oi! Eu moro no Footer!</h3>
      </footer>
    </div>
  );
}

export default App;
