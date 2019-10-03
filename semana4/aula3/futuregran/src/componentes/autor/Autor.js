import React from './node_modules/react'
import "./Autor.css"
import PropTypes from './node_modules/prop-types'

function Autor(props) {
    return (
        <div>
            <img id="imgAutor" src={props.imagem} alt="" />
            <h3> {props.titulo}</h3>
        </div>
    )
}

Autor.propTypes = {
    imagem: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired
}

export default Autor;