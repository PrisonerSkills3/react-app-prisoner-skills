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

const SignUpForm = () => {
  return (
    <div>
      <Nav />
      <h3>Sign Up Form</h3>
      <span>Already have an account yet?</span> <span><Link to="/login">Log In Here</Link></span>
      <Footer />
    </div>
  );
};

export default SignUpForm;