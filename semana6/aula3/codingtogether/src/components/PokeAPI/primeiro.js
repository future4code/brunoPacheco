import React from 'react';
import axios from 'axios';
import styled from 'styled-components'

const Squad = styled.div`

`

class Primeiro extends React.Component{
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
    handlePokemonSelection = (event) => {
        const selectedValue = event.target.value;
        this.setState({firstSelectedPokemon: selectedValue});
    }

    fetchSelectedPokemonPhoto = async () =>{
       const response = await axios.get(this.state.firstSelectedPokemon)
        this.setState({firstSelectedPokemonPhoto : response.data.sprites.front_default})
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.firstSelectedPokemon !== this.state.firstSelectedPokemon){
            this.fetchSelectedPokemonPhoto();
        }
    }

    render(){
        return(
            <div>
                <h1>Escolha o seu time :</h1>
                <h2></h2>
                <h2>{/*this.state.kantoList.length*/}</h2>
                <select 
                    onChange={this.handlePokemonSelection}
                    value={this.state.firstSelectedPokemon}
                >
                    <option>Escolha o 1º Pokémon</option>
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
                    {this.state.firstSelectedPokemonPhoto && (<img src={this.state.firstSelectedPokemonPhoto} />)}
                </Squad>
                
            </div>
        );
    }
}

export default Primeiro;