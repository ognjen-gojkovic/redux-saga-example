import React from "react";
import "./App.css";
import Counter from "./components/counter";
import PostList from "./components/postList";

function App() {
  return (
    <div className="App">
      <Counter />
      <PostList />
    </div>
  );
}

export default App;
