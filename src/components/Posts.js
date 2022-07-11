import React, { useEffect, useState } from "react";
import { Route, Link, Routes, useNavigate } from "react-router-dom";
import { deletePosts, getPosts } from "../api";


import "./App.css";

const Posts = ({postValue, setPostValue}) => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const catchId = (id) => { 
    setPostValue(id)
    return postValue
  }
  console.log(postValue, "this is postValue line 14")
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
  async function deletePost(){
    const tokens = localStorage.getItem("token")
    // console.log(tokens, 'this is tokens line 29')
    const post_id = postValue;
    // console.log(post_id, "this is post_id in posts")
    const erase = await deletePosts(tokens, post_id);
    navigate("/Profile")
    return erase
   }
  const postMapping = posts.map((post, index) => {
    return (
      <div id = "TitleBox">
        <div id = "titleContainer">
        <div key={`App${index}`}>
          <h1 id ="postTitle">{post.title}</h1>
          <h2 id = "additionalPost">PRICE: {post.price}</h2>
          <h4 id = "additionalPost">TIME POSTED: {post.updatedAt}</h4>
          <h4 id = "additionalPost">POST BY: {post.author.username}</h4>
          <h3 id = "additionalPost">DESCRIPTION: {post.description}</h3>

          <button onClick ={()=>{catchId(post._id), deletePost()}} id = "deleteButton">Delete Post</button>
          </div>
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
