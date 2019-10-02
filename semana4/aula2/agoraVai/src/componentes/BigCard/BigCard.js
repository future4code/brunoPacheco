import React from 'react';
import './BigCard.css';
import PropTypes from 'prop-types';


export function BigCard() {
    return (
        <section>
            <div className="logo">
                <img src="{props.imagem}" alt=""/>
            </div>
            <div className="apresentacao">
                <h3>{props.titulo}</h3>
                <p>{props.texto}</p>
            </div>
        </section>
    )
}

BigCard.propTypes= {
    imagem: PropTypes.string.isRequired,
    texto: PropsTypes.string.isRequired,
    titulo: PropsTypes.string.isRequired
}