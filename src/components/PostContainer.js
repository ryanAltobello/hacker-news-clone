import React from "react";
import SearchOptions from "./SearchOptions";
import PostList from "./PostList";

const PostContainer = () => {
  return (
    <div className="post-container">
      <SearchOptions />
      <PostList />
    </div>
  );
};

export default PostContainer;
