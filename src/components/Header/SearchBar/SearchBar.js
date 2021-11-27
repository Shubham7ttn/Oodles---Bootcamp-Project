import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import "../../../assets/styles/searchBar.css";
export default function SearchBar() {
  const dispatch = useDispatch();
  const captureSearchBarValue = useRef();
  //Random message will be displayed inside the search bar
  let randomNumber = Math.floor(Math.random() * 3);
  const greetCustomers = [
    "What you are looking for today ?",
    "Search for products, brands and much more",
    "Type something........like iPhone 12!",
  ];

  //Function will be executed whenever search bar is changed
  let searchHandler = (event) => {
    const searchValue = captureSearchBarValue.current.value;
    dispatch({ type: "check search bar", value: searchValue });
  };

  return (
    <React.Fragment>
      <div id="search-bar-container">
        <input
          type="text"
          placeholder={greetCustomers[randomNumber]}
          id="search-bar"
          name="search-bar"
          ref={captureSearchBarValue}
          onChange={searchHandler}
        />
        <span id="search-bar-icon">
          <i className="fa fa-search"></i>
        </span>
      </div>
    </React.Fragment>
  );
}
