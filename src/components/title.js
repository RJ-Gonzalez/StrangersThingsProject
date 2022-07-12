import React from 'react';
import { Link } from 'react-router-dom';

import "./Title.css";
export default function Title(){
    return (
           <div id= "navBar">
           <p id = "h1_title">Welcome to Stranger's Things</p>
           <h2> <Link to= '/Login'>Login</Link> Or <Link to ='/Register'>Register</Link></h2>
           </div>
    )
}


