import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class PostList extends React.Component {
  timeCheck(testDate) {
    let timeAgo = "";
    const today = new Date(),
      timeElapsed = today - testDate,
      seconds = Math.floor(timeElapsed / 1000),
      minutes = Math.floor(timeElapsed / 1000 / 60),
      hours = Math.floor(timeElapsed / 1000 / 60 / 60),
      days = Math.floor(timeElapsed / 1000 / 60 / 60 / 24),
      months = Math.floor(timeElapsed / 1000 / 60 / 60 / 24 / 30),
      years = Math.floor(timeElapsed / 1000 / 60 / 60 / 24 / 30 / 12);

    if (seconds < 119) {
      timeAgo = `1 minute ago`;
    } else if (minutes < 60) {
      timeAgo = `${minutes} minutes ago`;
    } else if (hours === 1) {
      timeAgo = `1 hour ago`;
    } else if (hours < 24) {
      timeAgo = `${hours} hours ago`;
    } else if (days === 1) {
      timeAgo = `1 day ago`;
    } else if (days < 30) {
      timeAgo = `${days} days ago`;
    } else if (months === 1) {
      timeAgo = `1 month ago`;
    } else if (months < 13) {
      timeAgo = `${months} months ago`;
    } else if (years === 1) {
      timeAgo = `1 year ago`;
    } else {
      timeAgo = `${years} years ago`;
    }
    return timeAgo;
  }

  renderList = () => {
    if (this.props.searchResponse.hits) {
      this.props.history.push(`/${this.props.searchResponse.params}`);
      return this.props.searchResponse.hits.map(el => {
        const testDate = new Date(el.created_at_i * 1000);

        return (
          <div className="post-content" key={el.objectID}>
            <div className="title">{el.title}</div>
            <div className="post-info">
              <a
                href={`https://news.ycombinator.com/item?id=${el.objectID}`}
                target="_blank"
                rel="noopener noreferrer"
              >{`${el.points} points`}</a>
              &nbsp; {` | `} &nbsp;
              <a
                href={`https://news.ycombinator.com/user?id=${el.author}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {el.author}
              </a>
              &nbsp; {` | `} &nbsp;
              {this.timeCheck(testDate)}
              &nbsp; {` | `} &nbsp;
              <a
                href={`https://news.ycombinator.com/item?id=${el.objectID}`}
                target="_blank"
                rel="noopener noreferrer"
              >{`${el.num_comments} comments`}</a>
              &nbsp; {` | `} &nbsp;
              <a href={el.url}>{el.url}</a>
            </div>
          </div>
        );
      });
    }
  };

  render() {
    return <div className="post-list">{this.renderList()}</div>;
  }
}
const mapStateToProps = state => {
  return { searchResponse: state.searchResponse };
};

export default withRouter(connect(mapStateToProps)(PostList));
