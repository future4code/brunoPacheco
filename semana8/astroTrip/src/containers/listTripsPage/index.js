import React from 'react';
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router/";

class ListTripsPage extends React.Component {
    render(){
        return (
            <div>
                <h2>List Trip Page</h2>
                <button onClick={this.props.goToHomePage}>Voltar para Home</button>
                <button onClick={this.props.goToCreateTripPage}>Criar nova viagem</button>
                <button onClick={this.props.goTripDetailsPage}>Detalhes da Viagem</button>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        goToHomePage: () => dispatch(push(routes.home)),
        goToCreateTripPage: () => dispatch(push(routes.createTripPage)),
        goTripDetailsPage: () => dispatch(push(routes.tripDetailsPage))
    }
}

export default connect (null, mapDispatchToProps)(ListTripsPage);