/*
-nav bar
  --Logo/Name
  -- Home <Link />
  -- Log In <Link /> (will be conditionally rerendered to display sign out if there is a token in the local storage)
*/

import React from "react";
import "../../styles/Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header>
      {/* <Link />'s will go here! */}
      <h1>Prisoner Skills</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/log-in">Log In</Link>
      </nav>
    </header>
  );
};

export default Nav;
