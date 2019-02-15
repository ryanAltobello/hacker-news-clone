import React from "react";
import { connect } from "react-redux";
import { searchQuery } from "../actions";

class SearchOptions extends React.Component {
  handleChange = e => {
    this.props.searchQuery(this.props.searchResponse.query, e.target.value);
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
          <select name="search-time-filter">
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

export default connect(
  mapStateToProps,
  { searchQuery }
)(SearchOptions);
