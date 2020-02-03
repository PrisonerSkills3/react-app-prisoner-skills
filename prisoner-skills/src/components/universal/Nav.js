/*
-nav bar
  --Logo/Name
  -- Home <Link />
  -- Log In <Link /> (will be conditionally rerendered to display sign out if there is a token in the local storage)
*/

import React from 'react';
import '../../styles/Nav.css';

const Nav = () => {
  return (
    <nav>
      <h3>Nav component</h3>
      {/* <Link />'s will go here */}
    </nav>
  );
};

export default Nav;