import React from 'react';
import { connect } from "react-redux";
import { push} from "connected-react-router";
import { routes } from "../Router/";

class TripDetailsPage extends React.Component {
    render(){
        return (
            <div>
                <h2>TripDetailsPage</h2>
            <button onClick={this.props.goToHomePage}>Voltar para home </button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        goToHomePage: () => dispatch(push(routes.home))
    }
}

export default connect(null, mapDispatchToProps)(TripDetailsPage);