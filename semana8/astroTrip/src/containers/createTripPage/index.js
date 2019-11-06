import React from 'react';
import { connect } from "react-redux";
import { goBack} from "connected-react-router";
import optionPlanet from "./planets";

const tripForm = [
    {
        name:"viagem",
        type:"text",
        label:"Título da Aventura",
        required: true,
        pattern:"^[a-zA-Z][a-zA-Z-_\.]{5,}$"
    },
    /*{
        name:"planet",
        type:"text",
        label:"Traçar Destino para",
        required: true,
        pattern:""
    }*/,
    {
        name:"date",
        type:"date",
        label:"Data de partida",
        required: true,
        pattern:"(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))",

    },
    {
        name:"description",
        type:"text",
        label:"Descreva a viagem",
        required: false,
        pattern:"[a-zA-Z]{30,}$"
    },
    {
        name:"durationInDays",
        type:"number",
        label:"Duração da Viagem (em dias) se tudo correr bem",
        required: true,
        pattern:"[0-9]+",
        min:50
    },
]

class CreateTripPage extends React.Component {
    constructor(props){
        super(props)
        this.state={
            trip:{} //estado inicial da viagem
        }
    }
    
    handleOnSubmit = event => {
         // Normalmente um formulário troca de página, a linha abaixo
        // previne essa mudança
        event.preventDefault();
        console.log(this.state.trip);
    };

    handleInputChange = event => {
        const {name, value } = event.target
        this.setState({ trip:{...this.state.trip, [name]: value } });
    };

    render(){
        return (
            <div>
                <h2>Create Trip Page</h2>
                <form onSubmit={this.handleOnSubmit}>
                    {tripForm.map(input => (
                        <div key={input.name}>
                        <label htmlFor={input.name}>{input.label}: </label>
                        <input 
                        id={input.name}
                        name={input.name}
                        type={input.type}
                        value={this.state.trip[input.name] || ""}
                        required={input.required}
                        onChange={this.handleInputChange}
                        pattern={input.pattern}
                        min={input.min}
                        />
                        </div>
                    ))}
                    <label>Escolha o planeta de destino: </label>
                    <select name="optionCountry" id="optionCountry">
                        {optionPlanet}
                    </select>
                    <button type="submit">Enviar</button>
                </form>
                <button onClick={this.props.goBack}>Voltar</button>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        goBack: () => dispatch(goBack())
    }
}

export default connect (null, mapDispatchToProps)(CreateTripPage);