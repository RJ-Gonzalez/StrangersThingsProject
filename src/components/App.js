import React, { useEffect, useState } from "react";
import { Route, Link, Routes } from "react-router-dom";
import { Login, Logout, Register, Title, Posts, Profile, NewPost, SinglePost,LoadingPage, MessageForm } from "./";

import "./App.css";

const App = () => {
  const [postValue, setPostValue] = useState('')
  const [messages, setMessages] = useState([])

  
  return (
    <div>
  
      <Title/>
      {/* <LoadingPage/> */}
 
      
      {/* attempting to make links to other pages, Cant create a route inside another route */}
      <Routes>
        <Route exact path="/Register" element = {<Register/>}></Route>
        <Route exact path="/Login" element = {<Login/>}></Route>
        <Route exact path="/Posts" element = {<Posts postValue = {postValue} setPostValue = {setPostValue}/>}></Route>
        <Route exact path="/Profile" element = {<Profile messages ={messages} setMessages = {setMessages}/> }></Route>
        <Route exact path = "/NewPost" element = {<NewPost/>}></Route>
        <Route exact path = "/Logout" element = {<Logout/>}></Route>
        <Route exact path = "/SinglePost" element = {<SinglePost/>}></Route>
        <Route exact path = "/MessageForm" element = {<MessageForm/>}></Route>




        {/* <Route exact path="/Messages" element = {<Messages/>}></Route> */}

      </Routes>
    </div>
  );
};

export default App;
