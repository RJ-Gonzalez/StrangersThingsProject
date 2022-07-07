import React from 'react';
import { NavLink } from 'react-router-dom';

import "./Title.css";
export default function Title(){
    return (
        <header id = "title">
            <div class = "navBar">
            <p id = "h1_title">Welcome to Stranger's Things</p>
            <NavLink to="/posts" activeClassName="current">Posts</NavLink>
            <NavLink to="/Register" activeClassName="current">Register</NavLink >
            <NavLink to="/Login" activeClassName="current">Login</NavLink>
            </div>
        </header>
    )
}
