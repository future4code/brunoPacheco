import React from 'react';
import "./PageSection.css";
import PropTypes from 'prop-types';


export function PageSection() {
    return (
        <section>
            <h2>{props.titulo}</h2>
        </section>
    )
}

PageSection.propTypes = {
    titulo: PropTypes.string.isRequired,
}