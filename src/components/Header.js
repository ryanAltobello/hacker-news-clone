import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { setQuery, setPage, searchQuery } from "../actions";
import SearchOptions from "./SearchOptions";
import logo from "../images/logo.jpg";
import search from "../images/search.png";

class Header extends React.Component {
  handleChange = e => {
    this.props.setPage(0);
    this.props.setQuery(e.target.value);
    this.props.searchQuery();
  };

  render() {
    return (
      <div className="header">
        <div className="header-bar">
          <div className="logo-title">
            <img id="logo" src={logo} alt="logo" />
            <h3>
              Hacker News<span style={{ fontSize: "0.8em" }}>...clone</span>
            </h3>
          </div>
          <div className="search">
            <img id="search-icon" src={search} alt="search icon" />
            <input
              type="text"
              onChange={this.handleChange}
              placeholder="Search stories..."
            />
          </div>
        </div>
        <SearchOptions />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchResponse: state.searchResponse,
    query: state.query,
    page: state.page
  };
};

export default connect(
  mapStateToProps,
  { setQuery, setPage, searchQuery }
)(Header);
