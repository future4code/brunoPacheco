import React from 'react'
import "./Foto.css"
import PropTypes from 'prop-types'

function Foto(props) {
    return (
        <div className="foto">
            <img src={props.imagem} alt='' />
        </div>
        
    )
}

Foto.propTypes = {
    imagem: PropTypes.string.isRequired
}

export default Foto;