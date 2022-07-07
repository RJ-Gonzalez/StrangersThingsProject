import React, { useEffect, useState } from "react";
import { Route, Link, Routes } from "react-router-dom";
import { getPosts } from "../api";
import { Login, Logout, Register, Title, Posts } from "./";

import "./App.css";

const App = () => {
  return (
    <div>
      <Title/>
      <Posts/>
      {/* attempting to make links to other pages, Cant create a route inside another route */}
      <Routes>
        <Route path="/Title"></Route>
        <Route path="/Register"></Route>
        <Route path="/Posts"></Route>
      </Routes>
    </div>
  );
};

export default App;
