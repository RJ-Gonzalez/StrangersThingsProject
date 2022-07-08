import React from 'react';
import { Link } from 'react-router-dom';

import "./Title.css";
export default function Title(){
    return (
        <header id = "title">
            <div id= "navBar">
            <p id = "h1_title">Welcome to Stranger's Things</p>
            <Link to = './'>Home</Link>
            <Link to ='/Posts'>Posts</Link>
            <Link to= '/Login'>Login</Link>
            <Link to ='/Register'>Register</Link>
            <Link to ='/Profile'>Profile</Link>
            </div>
        </header>
    )
}

// console.log(activePage, "This is active page");
