import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import "./styles/App.css";
import HomePage from "./components/Homepage";
import PrisonProfile from "./components/PrisonProfile";
import LogIn from "./components/formLogIn";
import SignUp from "./components/formSignUp";
// import { connect } from 'react-redux';
// import { fetchPrisons } from './actions/fetchPrisons';

function App(props) {
  return (
    <div className="App">
      <Switch>
        <Route path="/log-in" component={LogIn} />
        <Route path="/sign-up" component={SignUp} />
        <Route path={`/prison-profile/:prisonId`} component={PrisonProfile} />
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

// const mapStateToProps = state => ({
//   isLoading: state.isLoading,
//   error: state.error,
//   prisons: state.prisons
// })

// export default connect(mapStateToProps, { fetchPrisons })(App);
export default App;
