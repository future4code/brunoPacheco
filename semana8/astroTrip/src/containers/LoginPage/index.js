import React, { Component } from "react";
import { connect } from "react-redux";
import { push, goBack } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { routes } from "../Router/";

const LoginWrapper = styled.div`
  width: 100%;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { email, password } = this.state;

    return (
      <LoginWrapper>
        <TextField
          onChange={this.handleFieldChange}
          name="email"
          type="email"
          label="E-mail"
          value={email}
        />
        <TextField
          onChange={this.handleFieldChange}
          name="password"
          type="password"
          label="Password"
          value={password}
        />
        <Button onClick={this.props.goToListTripsPage}>Login</Button>
        <button onClick={this.props.goToHomePage}>Voltar</button>
      </LoginWrapper>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
    goToListTripsPage: () => dispatch(push(routes.listTripsPage)),
    goToHomePage: () => dispatch(push(routes.home))
})

export default connect(null, mapDispatchToProps)(LoginPage);
