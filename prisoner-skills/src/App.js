import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './styles/App.css';
import HomePage from './components/Homepage';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import TestLogin from './components/TestLogin';
import TestSignUp from './components/TestSignUp';

function App() {
  return (
    <div className="App">

      <Switch>
        <Route path="/login" component={TestLogin} />
        <Route path="/signup" component={TestSignUp} />
        <Route path="/" component={HomePage} />
      </Switch>

    </div>
  );
}

export default App;
