import React from 'react';
import { connect } from "react-redux";
import { push} from "connected-react-router";
import { routes } from "../Router/";


class TripDetailsPage extends React.Component {

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
                <h2>TripDetailsPage</h2>
            <button onClick={this.props.goToListTripsPage}>Voltar</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        goToListTripsPage: () => dispatch(push(routes.listTripsPage)),
        goToLogin: () => dispatch(push(routes.loginPage)),
    }
}

export default connect(null, mapDispatchToProps)(TripDetailsPage);