import React from 'react';
import axios from 'axios';
import styled from 'styled-components'

const Squad = styled.div`

`

class Terceiro extends React.Component{
    constructor(props){
        super(props)
        this.state={
            kantoList:[],
            firstSelectedPokemon:"",
            firstSelectedPokemonPhoto:"",
            secondSelectedPokemon:"",
            secondSelectedPokemonPhoto:"",
        }
    }

    fetchAllPokemonKanto = async () => {
        const pokemonRequestConfig = {
            params:{
                limit:151,
            }
        }
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon", pokemonRequestConfig)
         this.setState({kantoList: response.data.results});
    }

    componentDidMount(){
        this.fetchAllPokemonKanto();
    }

    //primeiro pokemon
    handlePokemonThirdSelection = (event) => {
        const selectedValue = event.target.value;
        this.setState({ThirdSelectedPokemon: selectedValue});
    }

    fetchSelectedThirdPokemonPhoto = async () =>{
       const response = await axios.get(this.state.ThirdSelectedPokemon)
        this.setState({ThirdSelectedPokemonPhoto : response.data.sprites.front_default})
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.ThirdSelectedPokemon !== this.state.ThirdSelectedPokemon){
            this.fetchSelectedThirdPokemonPhoto();
        }
    }

    render(){
        return(
            <div>
                <select 
                    onChange={this.handlePokemonThirdSelection}
                    value={this.state.ThirdSelectedPokemon}
                >
                    <option>Escolha o 3º Pokémon</option>
                    {this.state.kantoList.map((pokemon) => {
                        return(
                            <option 
                                key={pokemon.nome}
                                value={pokemon.url}
                            >
                            {pokemon.name}</option>
                        )
                    })}
                </select>
                <Squad>
                    {this.state.ThirdSelectedPokemonPhoto && (<img src={this.state.ThirdSelectedPokemonPhoto} />)}
                </Squad>
                
            </div>
        );
    }
}

export default Terceiro;