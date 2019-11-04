import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../loginPage/";
import HomePage from "../homePage/";
import ListtripsPage from "../listTripsPage/";
import TripDetailsPage from "../TripDetailsPage/";

const routes = {
  root: "/",
  homePage: "/homepage",
  listTripsPage: "/listtrippage",
  tripdetailspage: "/tripdetailspage"
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route path={routes.homePage} component={HomePage} />
        <Route path={routes.listTripsPage} component={ListTripPagePage} />
        <Route path={routes.tripdetailspage} component={TripDetailsPage} />
        <Route path={routes.root} component={LoginPage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
