import React from 'react';
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router/";

class ListTripsPage extends React.Component {
    
    componentDidMount() {
        //buscando token no LocalStorage. Se não existir, retorna null
        const token = window.localStorage.getItem('token');
        //se o token for igual a null, volta pra página de login  
        console.log(token)
        if (!token) {
            this.props.goToLogin();
        }
    }

    render(){
        return (
            <div>
                <h1>List Trip Page</h1>
                <li>viagem 1 <button onClick={this.props.goTripDetailsPage}>Detalhes da Viagem</button></li>
                <li>viagem 2<button onClick={this.props.goTripDetailsPage}>Detalhes da Viagem</button></li>
                <li>viagem 3<button onClick={this.props.goTripDetailsPage}>Detalhes da Viagem</button></li>
                <button onClick={this.props.goToHomePage}>Voltar para Home</button>
                <button onClick={this.props.goToCreateTripPage}>Criar nova viagem</button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        goToLogin: () => dispatch(push(routes.loginPage)),
        goToHomePage: () => dispatch(push(routes.home)),
        goToCreateTripPage: () => dispatch(push(routes.createTripPage)),
        goTripDetailsPage: () => dispatch(push(routes.tripDetailsPage)),
        
    }
}

export default connect (null, mapDispatchToProps)(ListTripsPage);