import React from 'react';
import Entradas from '../entradas/entradas'

export class BotaoCadastrar extends React.Component {
    constructor(props){
        super(props)
        this.state ={
        }
    }
    
    render(){
        return(
            <div>
                <Entradas/>
                <button onClick>Cadastrar</button>
            </div>
        );
    }
}

export default BotaoCadastrar;