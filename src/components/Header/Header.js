import React from "react";
import "../../assets/styles/header.css";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import Cart from "./Cart/Cart";
import SearchBar from "./SearchBar/SearchBar";
export default function Header() {
  return (
    <React.Fragment>
      <div id="header">
        <HeaderLogo />
        <SearchBar />
        <Cart />
      </div>
    </React.Fragment>
  );
}
