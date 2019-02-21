import React from "react";

import PostList from "./PostList";
import Pagination from "./Pagination";

const PostContainer = () => {
  return (
    <div className="post-container">
      <PostList />
      <Pagination />
    </div>
  );
};

export default PostContainer;
