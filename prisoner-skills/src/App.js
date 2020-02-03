import React from "react";
import { Switch, Route } from "react-router-dom";
import "./styles/App.css";
import HomePage from "./components/Homepage";
import LogIn from "./components/formLogIn";
import SignUp from "./components/formSignUp";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/log-in" component={LogIn} />
        <Route path="/sign-up" component={SignUp} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
