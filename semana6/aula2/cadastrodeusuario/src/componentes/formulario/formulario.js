import React from 'react';
import BotaoCadastrar from './botaoCadastrar/botaoCadastrar'
import Entradas from './entradas/entradas'


export class Formulario extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            
        }
    }

    render(){
        return(
            <div>
                <Entradas/>
                <BotaoCadastrar />
            </div>
        );
    }
}

export default Cadastrar;