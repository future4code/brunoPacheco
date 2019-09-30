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
           <input name="search" type="text" placeholder="buscar"></input>
        </div>
      </header>
      <div className="container">
        <nav>
          <ul id="menu">
            <li><a href="/exDaTarde.html">Início</a></li>
            <li><a href="">Em alta</a></li>
            <li><a href="">Inscrições</a></li>
            <li><a href="">Originais</a></li>
            <hr></hr>
            <li><a href="">Biblioteca</a></li>
            <li><a href="">Histórico</a></li>
          </ul>
        </nav>  
        <section>
            <a href="media1.html">
              <div className="media">
                <img src="https://picsum.photos/id/856/160/180?v=sau" alt="Media 1"></img>
                <p>Media 1</p>
              </div>
            </a>
            <a href="media2.html" >
              <div className="media">
                <img src="https://picsum.photos/id/856/160/180?v=sauds" alt="Media 2"></img>
                <p>Media 2</p>
              </div>
            </a>
            <a href="media3.html">
              <div className="media">
                <img src="https://picsum.photos/id/856/160/180?v=sauymun" alt="Media 3"></img>
                <p>Media 3</p>
              </div>
            </a>
            <a href="media4.html" >
              <div className="media">
                <img src="https://picsum.photos/id/856/160/180?v=sauyhtrre" alt="Media 4"></img>
                <p>Media 4</p>
              </div>
            </a>
            <a href="media5.html" >
              <div className="media">
                <img src="https://picsum.photos/id/856/160/180?v=sauferfw" alt="Media 5"></img>
                <p>Media 5</p>
              </div>
            </a>
            <a href="media6.html" >
              <div className="media">
                <img src="https://picsum.photos/id/856/160/180?v=saudewdx" alt="Media 6"></img>
                <p>Media 6</p>
              </div>
            </a>
            <a href="media7.html" >
              <div className="media">
                <img src="https://picsum.photos/id/856/160/180?v=saufrew" alt="Media 7"></img>
                <p>Media 7</p>
              </div>
            </a>
            <a href="media8.html" >
              <div className="media">
                <img src="https://picsum.photos/id/856/160/180?v=sauwwwqq" alt="Media 8"></img>
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
