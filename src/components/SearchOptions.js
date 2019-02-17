import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setSort, setFilter, searchQuery } from "../actions";

class SearchOptions extends React.Component {
  handleChange = e => {
    this.props.history.push(`/${this.props.searchResponse.params}`);

    const today = Math.floor(Date.now() / 1000);
    let filter = null;
    console.log(today);
    if (e.target.name === "search-sort") {
      this.props.setSort(e.target.value);
    } else {
      if (e.target.value === "all") {
        filter = 0;
      } else if (e.target.value === "day") {
        filter = today - 86400;
      } else if (e.target.value === "week") {
        filter = today - 604800;
      } else if (e.target.value === "month") {
        filter = today - 2629800;
      }
      this.props.setFilter(filter);
    }
    this.props.searchQuery();
  };

  render() {
    return (
      <div className="search-options-bar">
        <div className="search-options">
          <span className="search-bar-text">Sort by</span>
          <select
            name="search-sort"
            defaultValue="popularity"
            onChange={this.handleChange}
          >
            <option value="popularity">Popularity</option>
            <option value="date">Date</option>
          </select>
          <span className="search-bar-text">for</span>
          <select
            name="search-filter"
            defaultValue="all"
            onChange={this.handleChange}
          >
            <option value="all">All time</option>
            <option value="day">Last 24h</option>
            <option value="week">Past week</option>
            <option value="month">Past month</option>
            <option value="range">Custom range</option>
          </select>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { searchResponse: state.searchResponse };
};

export default withRouter(
  connect(
    mapStateToProps,
    { setSort, setFilter, searchQuery }
  )(SearchOptions)
);
