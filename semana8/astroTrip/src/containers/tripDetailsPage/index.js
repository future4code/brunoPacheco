import React from 'react';
import { connect } from "react-redux";
import { goBack} from "connected-react-router";
import routes from "../Router/";

class TripDetailsPage extends React.Component {
    render(){
        return (
            <div>
                <h2>TripDetailsPage</h2>
            <button onClick={props.goBack}>Voltar</button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        goBack: () => dispatch(goBack())
    }
}

export default connect(null, mapDispatchToProps)(TripDetailsPage);