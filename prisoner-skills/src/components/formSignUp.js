/*
Sign up form will make a POST request to the endpoint the backend gives us

-username
-password
-email
-prison name
-address
-image url
*/

import React from 'react';
import '../styles/SignUpForm.css';
import { Link } from 'react-router-dom';
import Nav from './universal/Nav';
import Footer from './universal/Footer';

const SignUp = () => {
  return (
    <div>
      <Nav />
      <h3>Sign Up Form</h3>
      <span>Already have an account yet?</span> <span><Link to="/log-in">Log In Here</Link></span>
      <Footer />
    </div>
  );
};

export default SignUp;