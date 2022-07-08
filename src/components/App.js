import React, { useEffect, useState } from "react";
import { Route, Link, Routes } from "react-router-dom";
import { Login, Logout, Register, Title, Posts, Profile } from "./";

import "./App.css";

const App = () => {
  
  return (
    <div>
  
      <Title/>
 
      
      {/* attempting to make links to other pages, Cant create a route inside another route */}
      <Routes>
        <Route exact path="/Register" element = {<Register/>}></Route>
        <Route exact path="/Login" element = {<Login/>}></Route>
        <Route exact path="/Posts" element = {<Posts/>}></Route>
        <Route exact path="/Profile" element = {<Profile/>}></Route>
        {/* <Route exact path="/Messages" element = {<Messages/>}></Route> */}

      </Routes>
    </div>
  );
};

export default App;
