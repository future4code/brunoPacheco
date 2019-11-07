import React, { Component } from "react";
import { connect } from "react-redux";
import { push, goBack } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { routes } from "../Router/";
import login from "../../actions/auth.js";

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

  onClickLogin = () => {
    const {email, password} = this.state;
    this.props.goToLogin(email, password);
  } 

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
        <Button onClick={this.onClickLogin}>Login</Button>
        <button onClick={this.props.goToHomePage}>Voltar</button>
      </LoginWrapper>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
    //usei a linha abaixo para fazer um teste de troca de página
    //goToListTripsPage: () => dispatch(push(routes.listTripsPage)), 
    goToHomePage: () => dispatch(push(routes.home)),
    goToLogin: (email, password) => dispatch(login(email, password))
  })

export default connect(null, mapDispatchToProps)(LoginPage);
