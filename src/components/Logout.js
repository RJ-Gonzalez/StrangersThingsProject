import React from "react";
import { Link } from "react-router-dom";

export default function LoggedOut(){
    return(
        <div>
      <div id = "logoutImage">
        <img src="http://images.squarespace-cdn.com/content/v1/54f38bd2e4b0ba5e06194182/1602170214306-YPMCP4SLT3NWHGBWEYK5/paul+edmondson+thanks+come+again+jenn+singer+gallery+sm.png" alt="Trendy Pants and Shoes"
          className="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5" />
      </div>
            <Link to = "/Login"><button id = "logBackIn" className="btn btn-dark">Log back in?</button></Link>
        </div>
    )
}

