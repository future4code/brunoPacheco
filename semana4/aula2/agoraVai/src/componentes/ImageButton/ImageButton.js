import React from 'react';
import './ImageButton.css';
import PropTypes from 'prop-types';

export function ImageButton() {
    return (
        <section>
            <img src="{props.imagem}" alt="" />
            <p>{props.titulo}</p>
        </section>
    )
}

ImageButton.propTypes = {
    imagem: PropTypes.string.isRequired,
    titulo:PropTypes.string.isRequired,
}