/*
-nav bar
  --Logo/Name
  -- Home <Link />
  -- Log In <Link /> (will be conditionally rerendered to display sign out if there is a token in the local storage)
*/

import React from "react";
import "../../styles/Nav.css";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";

const Nav = () => {
  return (
    <header>
      {/* <Link />'s will go here! */}
      <h1>SkillsBuddies</h1>
      <nav>
        <Link to="/">Home</Link>

        {/* This should conditionally render a login or log out button based on if there is a token within the local storage, and the logout button should clear local storage and then route back to login page */}
        {!localStorage.getItem("TOKEN") ? (
          <Link to="/log-in">Login</Link>
        ) : (
          <Link
            to="/log-in"
            onClick={() => {
              localStorage.clear();
              window.location.reload();
            }}
          >
            Logout
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Nav;
