import React from 'react';
import Entradas from '../entradas/entradas'

export class Cadastrar extends React.Component {
    constructor(props){
        super(props)
        this.state ={}
    }
    
    render(){
        return(
            <div>
                <Entradas/>
                <button>Cadastrar</button>
            </div>
        );
    }
}

export default Cadastrar;