import React from "react";

import SearchOptions from "./SearchOptions";
import PostList from "./PostList";
import Pagination from "./Pagination";

const PostContainer = () => {
  return (
    <div className="post-container">
      <SearchOptions />
      <PostList />
      <Pagination />
    </div>
  );
};

export default PostContainer;
