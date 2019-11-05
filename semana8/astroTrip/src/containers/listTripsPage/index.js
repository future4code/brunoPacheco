import React from 'react';
import { connect } from "react-redux";
import { push } from "connected-react-router";
import routes from "../Router/";

class ListTripsPage extends React.Component {
    render(){
        return (
            <div>
                <h2>List Trip Page</h2>
                <button onClick={props.goToHomePage}>Voltar para Home</button>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        goToHomePage: () => dispatch(push(routes.homePage))
    }
}

export default connect (null, mapDispatchToProps)(ListTripsPage);