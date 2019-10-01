import React from 'react';
import './VideoCard.css'

export function VideoCard(){
    return (
        <div>
            <img src="https://picsum.photos/200/200?versao=bla1" alt="" />
            
            <div className="titulo_container">
               <p>Título da Imagem</p> 
            </div>
        </div>
    )
}