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
            playlistName: "",
            }
    }

    onChangePlaylist = (event) => {
        this.setState({
            playlistName: event.target.value 
        })
    }

    createPlaylist = () => {
        const playlistGenero = {
            name: this.state.playlistName
        }

        axios.post("https://us-central1-spotif4.cloudfunctions.net/api/playlists/createPlaylist",
            playlistGenero, 
            {
                headers:{
                    auth: "32382399c21f8450ed2efe9b44135bb5"
                }
            }
        ).then((res)=>{
            window.alert("Gênero salvo com sucesso!")
        }).catch((error)=>{
            console.log(error)
        })
    }

    render(){
        return(
            <Container>
                <h1>Create Playlist</h1>
                <label>Nome da playlist </label>
                <input 
                    type="text"
                    placeholder="playlist"
                    value={ this.state.playlistName}
                    onChange={ this.onChangePlaylist }
                />
                <button onClick={this.createPlaylist}>Criar playlist</button>
            </Container>
        );
    }
}

export default CreatePlaylist;