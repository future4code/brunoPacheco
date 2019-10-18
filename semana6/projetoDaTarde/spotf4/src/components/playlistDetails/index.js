import React from'react';
import axios from 'axios';
import styled from 'styled-components';
import props from 'prop-types';



class PlaylistDetails extends React.Component {
    constructor(props){
        super(props)
        this.state={
            playlist:[
                {
                    rock:[{
                        name:"artist1",
                        song:"song1",
                        url:"http://spoti4.future4.com.br/1.mp3"
                    }]
                }
            ]
        }
    }

    render(){
        const playlistDetail = this.state.playlist.map((item)=>{
            return <li>{ item.name + " " + item.song}</li>
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