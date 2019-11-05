import React from 'react';
import { connect } from "react-redux";
import { goBack} from "connected-react-router";


class ApplicationForm extends React.Component {
    render(){
        return (
            <div>
                <h2>Application Form</h2>
                <button onClick={this.props.goBack}>Voltar</button>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        goBack: () => dispatch(goBack())
    }
}
export default connect (null, mapDispatchToProps)(ApplicationForm);