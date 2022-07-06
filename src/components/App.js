import React, { useEffect, useState } from "react";
import { getPosts } from "../api";
import { Login } from "./";

import "./App.css";

const App = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts()
      .then((response) => {
        // console.log(response)
        const posts = response.data.posts;
        setPosts(posts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(posts);

  const postMapping = posts.map((post, index) => {
    return (
      <div key={`App${index}`}>
        <h1>{post.title}</h1>
        <h4>{post.updatedAt}</h4>
        <h2>{post.price}</h2>
        <h3>{post.description}</h3>
        <h4>{post.author.username}</h4>
      </div>
    );
  });

  return (
    <div>
      <Login />
      {postMapping}
    </div>
  );
};

export default App;
