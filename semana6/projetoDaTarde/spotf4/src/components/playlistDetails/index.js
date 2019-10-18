import React from'react';
import axios from 'axios';
import styled from 'styled-components';
import props from 'prop-types';

const PlaylistDetailItem = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
`
const Deletar = styled.p`
    color:red;
`

class PlaylistDetails extends React.Component {
    constructor(props){
        super(props)
        this.state={
            playlist:[
                {
                    playlistId:"rock",
                    musica:[{
                        artist:"artist1",
                        name:"song1",
                        url:"http://spoti4.future4.com.br/1.mp3"  
                    },
                    ]
                },
                {
                    playlistId:"samba",
                    artist:"artista1",
                    name:"song1",
                    url:"http://spoti4.future4.com.br/10.mp3"
                }
            ]
        }
    }

    render(){
        const playlistDetail = this.state.playlist.map((item)=>{
            return (
                <PlaylistDetailItem>
                    <li>{ item.playlistId }</li>
                    <Deletar>X</Deletar>
                </PlaylistDetailItem> 
            )
        })
        return(
            <div>
                <h1>Detalhes da Playlist</h1>
        <ul>{playlistDetail}</ul>
            </div>
        );
    }
}

export default PlaylistDetails;