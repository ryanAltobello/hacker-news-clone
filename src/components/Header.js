import React from "react";
import { connect } from "react-redux";
import { setQuery, searchQuery } from "../actions";

import logo from "../images/logo.jpg";
import search from "../images/search.png";

class Header extends React.Component {
  handleChange = e => {
    this.props.setQuery(e.target.value);
    this.props.searchQuery();
  };

  render() {
    return (
      <div className="header">
        <img id="logo" src={logo} alt="logo" />
        <h3>
          Hacker News<span style={{ fontSize: "0.8em" }}>...clone</span>
        </h3>
        <div className="search">
          <img id="search-icon" src={search} alt="search icon" />
          <input
            type="input"
            onChange={this.handleChange}
            placeholder="Search stories..."
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchResponse: state.searchResponse
  };
};

export default connect(
  mapStateToProps,
  { setQuery, searchQuery }
)(Header);
