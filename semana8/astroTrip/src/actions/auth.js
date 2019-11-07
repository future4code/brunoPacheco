import React from 'react';
import axios from "axios";
import { routes } from "../containers/Router";
import { push } from "connected-react-router";

//dispatch para chamar a página requerida 
const login = (email, password) => async (dispatch) =>{
  try {
    const response = await axios.post(
      //abaixo é inserido o https do login que faz a comunicação com o backend
      "https://us-central1-missao-newton.cloudfunctions.net/futureX/bruno/login",
      {
        email,
      password,   
      }
    ); 
    console.log(response);
    window.localStorage.setItem('token', response.data.token);
    dispatch(push(routes.listTripsPage))

  } catch (error) {
    console.log(error.message)
  }
}

export default login;