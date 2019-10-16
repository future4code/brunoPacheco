import React from 'react';

export class Entradas extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            
        }
    }
    
    render(){
        return(
            <div>
                <label>Nome:</label>
                <input type="text" />
                <label>e-Mail:</label>
                <input type="email"/>
            </div>
        );
    }
}

export default Entradas;