import React from "react";
import Header from "./Header";
import Posts from "./Posts";

import "./App.css";

const App = () => {
  return (
    <div className="content">
      <Header />
      <Posts />
    </div>
  );
};

export default App;
