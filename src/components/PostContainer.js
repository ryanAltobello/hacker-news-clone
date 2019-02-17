import React from "react";
import SearchOptions from "./SearchOptions";
import PostList from "./PostList";
import { BrowserRouter } from "react-router-dom";

const PostContainer = () => {
  return (
    <BrowserRouter>
      <div className="post-container">
        <SearchOptions />
        <PostList />
      </div>
    </BrowserRouter>
  );
};

export default PostContainer;
