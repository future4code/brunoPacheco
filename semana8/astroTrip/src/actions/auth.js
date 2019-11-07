import React from 'react';
import axios from "axios";

const login = (email, password) => async (dispatch) =>{
  const response = await axios.post(
    //abaixo é inserido o https do login que faz a comunicação com o backend
    "https://us-central1-missao-newton.cloudfunctions.net/futureX/bruno/login",
    {
      email,
    password,   
    }
  ); 
  console.log(response);
    //salva o token no localStorage do browser.
  window.localStorage.setItem("token", response.data.token);
};

export default login;