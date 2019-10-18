import React from'react';
import axios from 'axios';
import styled from 'styled-components';
import props from 'prop-types';

const Container = styled.div`
    display:flex;
    flex-direction:column;
`

class InputSongPlaylist extends React.Component {
    constructor(props){
        super(props)
        this.state={}
    }

    render(){
        return(
            <Container>
                <h1>Input Song Playlist</h1>
                <label>Escolha a playlist</label>
                <select>
                    <option>{}</option>
                </select>
                <label>Artista ou banda: </label>
                <input type="text" />
                <label>Nome da música: </label>
                <input type="text" />
                <label>Inserir música: </label>
                <input type="text" placeholder="URL" />
                <button >Salvar</button>
            </Container>
        );
    }
}

export default InputSongPlaylist;