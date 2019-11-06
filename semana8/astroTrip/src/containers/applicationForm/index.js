import React from 'react';
import { connect } from "react-redux";
import { goBack} from "connected-react-router";
import optionCountry from "./country.js";

const inputForm= [
    {
        name:"name",
        type:"text",
        label:"Nome",
        required: true,
        pattern:"^[a-zA-Z][a-zA-Z-_\.]{3,}$" //letras maiúsculas e minúsculas de A a Z com no mínimo 3 caracteres
    },
    {
        name:"age",
        type:"number",
        label:"Idade",
        required: true,
        pattern:"[0-9]+",
        min:18
    },
    {
        name:"applicationText",
        type:"text",
        label:"Por que sou um bom candidato(a)",
        required: true,
        pattern:"^[a-zA-Z][a-zA-Z-_\.]{30,}$"
    },
    {
        name:"profession",
        type:"text",
        label:"Profissão",
        required: true,
        pattern:"^[a-zA-Z][a-zA-Z-_\.]{10,}$"
    },
    /*{
        name:"country",
        type:"text",
        label:"Qual o seu país",
        required: true,
    },
    {
        name:"canditate",
        type:"text",
        label:"Candidatar-se a",
        required: true,
    },*/
]

class ApplicationForm extends React.Component {
    constructor(props){
        super(props)
        this.state={
            form:{} //estado inicial do formulário
        }
    }

    handleInputChange = event => {
        const { name, value} = event.target
        this.setState( {form: {...this.state.form, [name]: value} } )
    };

    handleOnSubmit = event => {
        event.preventDefault();
        console.log(this.state.form)
    };

    render(){
        return (
            <div>
                <h2>Application Form</h2>
                <form onSubmit={this.handleOnSubmit}>
                {inputForm.map(input => (
                    <div key={input.name}>
                        <label htmlFor={input.name}>{input.label}: </label>
                        <input 
                        id={input.name}
                        name={input.name}
                        type={input.type}
                        value={this.state.form[input.name] || ""}
                        required={input.required}
                        onChange={this.handleInputChange}
                        pattern={input.pattern}
                        min={input.min}
                        />
                    </div>
                ))}
                <label>Escolha o seu País:</label>
                <select name="optionCountry" id="optionCountry">
                    {optionCountry}
                </select>
                <label>Escolha a viagem: </label>
                <select name="tripChoise" id="tripChoise">
                    <option>Em desenvolvimento</option>
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
export default connect (null, mapDispatchToProps)(ApplicationForm);