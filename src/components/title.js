import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import "./Title.css";
export default function Title(){
    return (
        <header id = "title">
            <div class = "navBar">
            <p id = "h1_title">Welcome to Stranger's Things</p>
            <Link to ='/Posts'>Posts</Link>
            <Link to= '/Login'>Login</Link>
            <Link to ='/Register'>Register</Link>
            </div>
        </header>
    )
}

// console.log(activePage, "This is active page");
