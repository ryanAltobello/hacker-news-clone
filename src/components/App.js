import React from "react";
import { connect } from "react-redux";
import { searchQuery } from "../actions";

import Header from "./Header";
import PostContainer from "./PostContainer";
import "./App.css";

class App extends React.Component {
  componentDidMount() {
    this.props.searchQuery();
  }

  render() {
    return (
      <div className="content">
        <Header />
        <PostContainer />
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
  { searchQuery }
)(App);
