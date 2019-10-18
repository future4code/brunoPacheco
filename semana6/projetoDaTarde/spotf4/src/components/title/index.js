import React from'react';
import axios from 'axios';
import styled from 'styled-components';
import props from 'prop-types';

const Titulo = styled.div`
    justify-items: center;
    align-items: center;
`

class Title extends React.Component {
    constructor(props){
        super(props)
        this.state={}
    }

    render(){
        return(
            <Titulo>
                <h1>Spotf4</h1>
            </Titulo>
        );
    }
}

export default Title;