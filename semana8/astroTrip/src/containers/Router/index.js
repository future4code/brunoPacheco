import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../loginPage";
import HomePage from "../homePage/";
import ListTripsPage from "../listTripsPage";
import TripDetailsPage from "../tripDetailsPage/";
import ApplicationForm from "../applicationForm/";
import CreateTripPage from "../createTripPage/";

export const routes = {
  applicationForm: "/applicationForm", //Para qualquer usuário poder se increver
  loginPage: "/loginPage", //Para o usuário fazer o login
  createTripPage: "/trips/create", //Para criar uma nova viagem
  listTripsPage: "/trips/list", //Para listar todas as viagens
  tripdetailspage: "/tripdetailspage", //Para vermos os candidatos de uma viagem
  home: "/", //Para o usuário decidir entre dois botões
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route path={routes.applicationForm} component={ApplicationForm} />
        <Route path={routes.loginPage} component={LoginPage} />
        <Route path={routes.createTripPage} component={CreateTripPage} />
        <Route path={routes.listTripsPage} component={ListTripsPage} />
        <Route path={routes.tripDetailsPage} component={TripDetailsPage} />
        <Route path={routes.home} component={HomePage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
