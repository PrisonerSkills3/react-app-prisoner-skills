import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import "./styles/App.css";
import HomePage from "./components/Homepage";
import PrisonProfile from "./components/PrisonProfile";
import LogIn from "./components/formLogIn";
import SignUp from "./components/formSignUp";
import CreateInmateProfile from './components/CreateInmateProfile';
import PrivateRoute from './components/PrivateRoute';

function App(props) {
  return (
    <div className="App">
      <Switch>
        <Route path="/log-in" component={LogIn} />
        <Route path="/sign-up" component={SignUp} />
        <PrivateRoute path="/prison-profile/:prisonId/add-inmate" component={CreateInmateProfile} />
        <Route path={`/prison-profile/:prisonId`} component={PrisonProfile} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
