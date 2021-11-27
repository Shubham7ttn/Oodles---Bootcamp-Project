import React from "react";
import { Link } from "react-router-dom";
import largeLogo from "../../../assets/images/logo-large.png";
import logo from "../../../assets/images/logo-small.png";

export default function HeaderLogo() {
  return (
    <div id="logo">
      <Link to ="/home">
        <img id="small-logo" src={logo} alt="Small Logo"></img>
      </Link>
      <Link to="/home">
        <img id="large-logo" src={largeLogo} alt="Large Logo"></img>
      </Link>
    </div>
  );
}
