import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { setPage, setActive, searchQuery } from "../actions";

class Pagination extends React.Component {
  onClick = e => {
    this.props.setActive(parseInt(e.target.id));
    if (e.target.id === this.props.page) {
      return;
    } else {
      this.props.setPage(e.target.id);
      this.props.searchQuery();
    }
  };

  render() {
    const numPages = this.props.searchResponse.nbPages;
    let numPagesArray = [];
    for (let i = 0; i < 6; i++) {
      numPagesArray.push(i);
    }

    return (
      <div className="pagination-content">
        <div className="buttons">
          <button
            className={this.props.isActive === 0 ? "page disabled" : "page"}
            id={0}
            onClick={this.onClick}
          >
            {"<<"}
          </button>
          <button
            className={this.props.isActive === 0 ? "page disabled" : "page"}
            id={this.props.isActive - 1}
            onClick={this.onClick}
          >
            {"<"}
          </button>
          {numPagesArray.map(el => {
            return (
              <button
                className={this.props.isActive == el ? "page active" : "page"}
                id={el}
                key={el}
                onClick={this.onClick}
              >
                {`${el + 1}`}
              </button>
            );
          })}
          <button
            className={
              this.props.isActive === numPages - 1 ? "page disabled" : "page"
            }
            id={this.props.isActive + 1}
            onClick={this.onClick}
          >
            {">"}
          </button>
          <button
            className={
              this.props.isActive === numPages - 1 ? "page disabled" : "page"
            }
            id={numPages - 1}
            onClick={this.onClick}
          >
            {">>"}
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchResponse: state.searchResponse,
    page: state.setPage,
    isActive: state.isActive
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    { setPage, setActive, searchQuery }
  )(Pagination)
);
