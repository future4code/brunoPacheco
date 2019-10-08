import React from 'react'
import "./Autor.css"
import PropTypes from 'prop-types'

function Autor(props) {
    return (
        <section className="autorContainer">
            <img id="imgAutor" src={props.imagem} alt="" />
            <h3> {props.titulo}</h3>
        </section>
    )
}

Autor.propTypes = {
    imagem: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired
}

export default Autor;