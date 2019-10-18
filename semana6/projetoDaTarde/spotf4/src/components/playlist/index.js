import React from'react';
import axios from 'axios';
import styled from 'styled-components';
import props from 'prop-types';

const Container = styled.div`
    border: 1px solid white;
    width:800px;
`

class Playlist extends React.Component {
    constructor(props){
        super(props)
        this.state={
            playlist:[
                {
                    rock:[],
                    samba:[],
                }
            ]
        }
    }

    render(){
        const listaDePlaylist = this.state.playlist.map((item)=>{
            return <li>{ item }</li>
        })
        return(
            <Container>
                <h2>Playlist</h2>
                <ul>
                    { listaDePlaylist }
                </ul>
            </Container>
        );
    }
}

export default Playlist;