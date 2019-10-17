import React from 'react';
import styled from 'styled-components'

const Formulario = styled.div`
    display:flex;
    flex-direction:column;
    width:200px;
    justify-content:center;
`

export class FichaDeCadastro extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            name:"",
            email:""
        }
    }

    clicarEmCadastrar=()=>{
        window.alert("Usuário cadastrado com sucesso!")
    }

    onNameChange = (event) =>{
        this.setState({
            name:event.target.value
        })
    }

    onEmailChange = (event) =>{
        this.setState({
            email:event.target.value
        })
    }

    render(){
        return(
            <Formulario>
                <h2>Cadastro de Usuários</h2>
                <label>Nome:</label>
                <input onChange={this.onNameChange} type="text" />
                <label>e-Mail:</label>
                <input onChange={this.onEmailChange} type="email"/>
                <button onClick={this.clicarEmCadastrar}>Cadastrar</button>
            </Formulario>
        );
    }
}

export default FichaDeCadastro;