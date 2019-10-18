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
            playlist:""
        }
    }

    componentDidMount() {
        axios
            .get("https://us-central1-spotif4.cloudfunctions.net/api/playlists/getAllPlaylists",
                {
                    headers:{
                        auth: "32382399c21f8450ed2efe9b44135bb5"
                    }
                }
            ).then((response) => {
                this.setState({
                    playlist:response.data.result
                })
            })
    }
    
    render(){
        return(
            <Container>
                {
                    this.state.playlist.map((name,i)=>{
                        return(
                            <p>{this.playlist.name}</p>
                        );
                    })   
                }
            </Container>
        );   
    }
}

export default Playlist;