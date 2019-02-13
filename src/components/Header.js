import React from "react";
import logo from "../images/logo.jpg";
import search from "../images/search.png";

const Header = () => {
  return (
    <div className="header">
      <img id="logo" src={logo} alt="logo" />
      <h3>
        Search Hacker News<span style={{ fontSize: "0.8em" }}>...clone</span>
      </h3>
      <div className="search">
        <img id="search-icon" src={search} alt="search icon" />
        <input type="input" placeholder="Search stories..." />
      </div>
    </div>
  );
};

export default Header;
