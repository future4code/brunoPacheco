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
        this.state={
            name: "", 
            artist: "",
            url: ""      
        }
    }

    addNewSongOnPlaylist = () => {
        window.alert("A música foi adicionada com sucesso!")

    }

    render(){
        return(
            <Container>
                <h1>Input Song Playlist</h1>
                <label>Escolha a playlist</label>
                
                <select>
                    <option>Escolha uma Playlist</option>
                    <option>{}</option>
                </select>
                <label>Artista ou banda: </label>
                <input 
                    type="text" 
                    value={ this.state.artist }
                />
                <label>Nome da música: </label>
                <input 
                    type="text"
                    value={ this.state.name }
                />
                <label>Inserir música: </label>
                <input 
                    type="text"
                    placeholder="URL" 
                    value={ this.state.url }
                />
                <button onCLick={ this.addNewSongOnPlaylist }>Adicionar</button>
            </Container>
        );
    }
}

export default InputSongPlaylist;