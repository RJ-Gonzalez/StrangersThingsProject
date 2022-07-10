import React, { useEffect, useState } from "react";
import { Route, Link, Routes } from "react-router-dom";
import { deletePosts, getPosts } from "../api";


import "./App.css";

const Posts = (setToken) => {
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    getPosts()
      .then((response) => {
        console.log(response, 'respnse from Posts')
        const posts = response.data.posts;
        setPosts(posts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(posts);
  async function deletePost(postId, token){
    const response =  await deletePosts(token, postId);
    localStorage.setItem("token", token)
    console.log(token)
   }
  const postMapping = posts.map((post, index) => {
    return (
      <div>
        <div key={`App${index}`}>
          <h1>{post.title}</h1>
          <h2>{post.price}</h2>
          <h4>{post.updatedAt}</h4>
          <h3>{post.description}</h3>
          <h4>{post.author.username}</h4>
          <button onClick ={()=>{deletePost(setToken,post._id)}}>Delete Post</button>
         
        </div>
      </div>
    );
  });

  return (
    <div>
      {/* attempting to make links to other pages, Cant create a route inside another route */}
      {postMapping}
    </div>
  );
};

export default Posts;
