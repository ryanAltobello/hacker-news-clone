import React from "react";
import { connect } from "react-redux";
import { setPage, searchQuery } from "../actions";

import Header from "./Header";
import PostContainer from "./PostContainer";
import "./App.css";

class App extends React.Component {
  componentDidMount() {
    this.props.setPage(0);
    this.props.searchQuery();
  }
  componentDidUpdate() {
    window.scrollTo(0, 0);
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
    searchResponse: state.searchResponse,
    page: state.setPage
  };
};

export default connect(
  mapStateToProps,
  { setPage, searchQuery }
)(App);
