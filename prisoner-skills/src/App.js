import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './styles/App.css';
import HomePage from './components/Homepage';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';

function App() {
  return (
    <div className="App">

      <Switch>
        <Route path="/login" component={LoginForm} />
        <Route path="/signup" component={SignUpForm} />
        <Route path="/" component={HomePage} />
      </Switch>

    </div>
  );
}

export default App;
