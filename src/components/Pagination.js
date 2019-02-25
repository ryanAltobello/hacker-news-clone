import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { setPage, searchQuery } from "../actions";

class Pagination extends React.Component {
  onClick = e => {
    if (e.target.id === this.props.page) {
      return;
    } else {
      this.props.setPage(parseInt(e.target.id));
      this.props.searchQuery();
    }
  };

  render() {
    if (!this.props.searchResponse.hits || isNaN(this.props.page)) {
      return (
        <div style={{ fontSize: "36px", marginLeft: "10px" }}>Loading...</div>
      );
    } else {
      const activePage = this.props.page,
        numPages = parseInt(this.props.searchResponse.nbPages),
        prevPage = activePage - 1,
        nextPage = activePage + 1,
        lastPage = numPages - 1;
      let numPagesArray = [];
      // routePath = `${window.location.pathname}${
      //   window.location.search
      // }`.slice(0, -1);

      if (window.innerWidth > 500) {
        if (numPages < 8) {
          for (let i = 0; i < numPages; i++) {
            numPagesArray.push(i);
          }
        } else {
          for (let i = activePage - 3; i <= activePage + 3; i++) {
            if (activePage === 0) {
              numPagesArray.push(i + 3);
            } else if (activePage === 1) {
              numPagesArray.push(i + 2);
            } else if (activePage === 2) {
              numPagesArray.push(i + 1);
            } else if (activePage === numPages - 1) {
              numPagesArray.push(i - 3);
            } else if (activePage === numPages - 2) {
              numPagesArray.push(i - 2);
            } else if (activePage === numPages - 3) {
              numPagesArray.push(i - 1);
            } else {
              numPagesArray.push(i);
            }
          }
        }
      } else {
        if (numPages < 4) {
          for (let i = 0; i < numPages; i++) {
            numPagesArray.push(i);
          }
        } else {
          for (let i = activePage - 1; i <= activePage + 1; i++) {
            if (activePage === 0) {
              numPagesArray.push(i + 1);
            } else if (activePage === numPages - 1) {
              numPagesArray.push(i - 1);
            } else {
              numPagesArray.push(i);
            }
          }
        }
      }

      return (
        <div className="pagination-content">
          <div className="buttons">
            <button
              className={activePage === 0 ? "page disabled" : "page"}
              id={0}
              onClick={this.onClick}
            >
              {"<<"}
            </button>

            <button
              className={activePage === 0 ? "page disabled" : "page"}
              id={prevPage}
              onClick={this.onClick}
            >
              {"<"}
            </button>

            {numPagesArray.map(el => {
              return (
                <button
                  className={activePage === el ? "page active" : "page"}
                  id={el}
                  key={el}
                  onClick={this.onClick}
                >
                  {`${el + 1}`}
                </button>
              );
            })}
            <button
              className={activePage === lastPage ? "page disabled" : "page"}
              id={nextPage}
              onClick={this.onClick}
            >
              {">"}
            </button>

            <button
              className={activePage === lastPage ? "page disabled" : "page"}
              id={lastPage}
              onClick={this.onClick}
            >
              {">>"}
            </button>
          </div>
        </div>
      );
    }
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
)(Pagination);
