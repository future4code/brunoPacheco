import React from 'react';
import styled from 'styled-components'

const listaDeUsuarios = [
    {
      id:"id1",
      name:"Bruno"
    }
]

const Deletar = styled.p`
    color:red;
` 

const UsuarioItem = styled.div`
    width:100px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
`

export class ListaDeUsuarios extends React.Component {
    constructor(props){
        super(props)
        this.state={
        }
    }

    render(){
        return(
            <div>
                <h2>Lista de usuários cadastrados</h2>
                {
                    listaDeUsuarios.map((usuario,i)=> {
                        return( 
                            <UsuarioItem>
                                <p>{usuario.name}</p>
                                <Deletar> X </Deletar>
                            </UsuarioItem>
                        )
                    })
                }
            </div>
        );
    }
}

export default ListaDeUsuarios;