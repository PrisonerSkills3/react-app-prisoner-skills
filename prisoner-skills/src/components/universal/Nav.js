/*
-nav bar
  --Logo/Name
  -- Home link
  -- Log In link (will be conditionally rerendered to display sign out if there is a token in the local storage)
*/

import React from 'react';
import '../../styles/Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <h2>Prisoner Skills</h2>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
};

export default Nav;