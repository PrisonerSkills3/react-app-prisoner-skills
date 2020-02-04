/*
This will be the page that is first shown to everybody (after being routed to from the marketing page)

the home page needs to have the following:

-nav bar
  --Logo/Name
  -- Home link
  -- Log In link

-hero image

-prison cards aligned in a grid format
  -- when clicking a prison card it will route to the PrisonProfile.js which will display the data of that given prison card  which was selected

-footer
*/

import React, {useState, useEffect} from 'react';
import '../styles/Homepage.css';
// import { Switch, Route } from 'react-router-dom';
import Nav from './universal/Nav';
import Footer from './universal/Footer';
import Prisons from './Prisons';
// import { data } from '../data';
// import axios from 'axios';

// https://prisoner-skills-backend.herokuapp.com/api/prisons

const Homepage = () => {
  return (
    <div>
      <Nav />

      <h1>Home Page</h1>
      <Prisons />

      <Footer />
    </div>
  );
};

export default Homepage;