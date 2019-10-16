import React from 'react';

export class Titulo extends React.Component {
    constructor(props){
        super(props)
        this.state ={}
    }
    
    render(){
        return(
            <div>
                <h1>Cadastro de Usuários</h1>
            </div>
        );
    }
}

export default Titulo;