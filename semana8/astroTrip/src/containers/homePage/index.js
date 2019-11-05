import React from 'react';
import { connect } from "react-redux";
import { push } from "connected-react-router";
import routes from "../Router/";

const HomePage = props => {
        return (
            <div>
                <h2>HomePage</h2>
                <button onClick={props.goToApplicationForm}>application form</button>
                <button onClick={props.goToLoginPage}>login page</button>
            </div>
        );
}

function mapDispatchToProps(dispatch) {
    return {
        goToApplicationForm: () => dispatch(push(routes.applicationForm)),
        goToLoginPage: () => dispatch(push(routes.loginPage))
    };
}

export default connect (null, mapDispatchToProps)(HomePage);