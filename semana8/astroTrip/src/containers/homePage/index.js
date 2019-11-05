import React from 'react';
import { connect } from "react-redux";
import { push } from "connected-react-router";

const HomePage = props => {
        return (
            <div>
                <h2>home page</h2>
                <button onClick={props.goToApplicationForm}>application form</button>
                <button onClick={props.goToLoginPage}>login page</button>
            </div>
        );
}

function mapDispatchToProps(dispatch) {
    return {
        goToApplicationForm: () => dispatch(push("/application-form")),
        goToLoginPage: () => dispatch(push("/login"))
    };
}

export default connect (null,mapDispatchToProps)(HomePage);