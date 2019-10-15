import React from 'react';

export class Entradas extends React.Component {
    constructor(props){
        super(props)
        this.state ={}
    }
    
    render(){
        return(
            <div>
                <label>Nome:</label>
                <input />
                <label>e-Mail:</label>
                <input />
            </div>
        );
    }
}

export default Entradas;