import React from 'react';
import { Link } from 'react-router-dom';

import "./Title.css";
export default function LoadingPage(){
return(
    <div id = "loadingPageDiv">
        <h1 id ="loadingPage">Loading.....</h1>
        <Link to = "/Login"><button id ="loadingPageButton">Login</button></Link>
        <Link to = "/Posts"><button id ="loadingPageButton">View Posts</button></Link>
    </div>
)
}

