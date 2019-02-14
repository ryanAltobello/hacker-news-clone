import React from "react";

const SearchOptions = () => {
  return (
    <div className="search-options-bar">
      <span className="search-bar-text">Search</span>
      <select name="search-type">
        <option>All</option>
        <option selected="yes">Stories</option>
        <option>Comments</option>
      </select>
      <span className="search-bar-text">by</span>
      <select name="search-sort">
        <option>Popularity</option>
        <option>Date</option>
      </select>
      <span className="search-bar-text">for</span>
      <select name="search-time-filter">
        <option>All time</option>
        <option>Last 24h</option>
        <option>Past week</option>
        <option>Past month</option>
        <option>Custom range</option>
      </select>
    </div>
  );
};

export default SearchOptions;
