import React from'react';
import axios from 'axios';
import styled from 'styled-components';
import props from 'prop-types';

const Container = styled.div`
    display:flex;
    flex-direction:column;
`

class CreatePlaylist extends React.Component {
    constructor(props){
        super(props)
        this.state={
        }
    }

    render(){
        return(
            <Container>
                <h1>Create Playlist</h1>
                <label>Nome da playlist </label>
                <input type="text" />
                <button >Criar playlist</button>
            </Container>
        );
    }
}

export default CreatePlaylist;