/*
Log in form should make a POST request to the endpoint the backend will give us that will authenticate the user with a token:

-username
-password
*/

import React from 'react';
import '../styles/LoginForm.css';
import { Link } from 'react-router-dom';
import Nav from './universal/Nav';
import Footer from './universal/Footer';

const LogIn = () => {
  return (
    <div>
      <Nav />
      <h3>Login Form</h3>
      <span>Don't have an account yet?</span> <span><Link to="/sign-up">Sign Up Here</Link></span>
      <Footer />
    </div>
  );
};

export default LogIn;