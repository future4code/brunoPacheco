import React from 'react'
import "./CurtirEComentar.css"
import PropTypes from 'prop-types'

function CurtirEComentar(props) {
    return(
        <section className="curtirEComentar">
            <img src={props.curtir} alt="" />
            <img src={props.comentar} alt="" />
        </section>
    )
}

CurtirEComentar.propTypes = {
    curtir:PropTypes.string.isRequired,
    comentar:PropTypes.string.isRequired
}

export default CurtirEComentar;