/*
-logo/name
-home <Link />
*/

import React from "react";
import "../../styles/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      {/* <Link />'s go here */}
      <h4>Prisoner Skills</h4>
      <Link to="/">Home</Link>
    </footer>
  );
};

export default Footer;
