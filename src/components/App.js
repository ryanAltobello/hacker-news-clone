import React from "react";
import Header from "./Header";
import PostContainer from "./Posts";

import "./App.css";

const App = () => {
  return (
    <div className="content">
      <Header />
      <PostContainer />
    </div>
  );
};

export default App;
