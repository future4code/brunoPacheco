import React from 'react';
import { connect } from "react-redux";
import { push} from "connected-react-router";
import { routes } from "../Router/";

class TripDetailsPage extends React.Component {
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
    }
}

export default connect(null, mapDispatchToProps)(TripDetailsPage);