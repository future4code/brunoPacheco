import React from 'react';
import './SmallCard.css';
import { PropTypes } from '@babel/types';

export function SmallCard() {
    return(
        <section>
            <div classname="imagem">
                <img src="{props.imagem}" alt="" />
                <label>{tipo}</label>
                <p>{props.texto}</p>
            </div>
           
        </section>
    )
}

SmallCard.propTypes = {
    image:PropTypes.string.isRequired,
    tipo:PropTypes.string.isRequired,
    texto:PropTypes.string.isRequired,
}