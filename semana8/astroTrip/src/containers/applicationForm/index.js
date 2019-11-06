import React from 'react';
import { connect } from "react-redux";
import { goBack} from "connected-react-router";

const inputForm= [
    {
        name:"name",
        type:"text",
        label:"Nome",
        required: true,
        pattern:"[a-zA-Z0-9]+"
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
        pattern:"[a-zA-Z0-9]+"
    },
    {
        name:"profession",
        type:"text",
        label:"Profissão",
        required: true,
        pattern:"[a-zA-Z0-9]+"
    },
    {
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
    },

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