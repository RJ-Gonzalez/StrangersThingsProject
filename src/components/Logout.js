import React from "react";
import { Link } from "react-router-dom";

export default function LoggedOut(){
    return(
        <div>
            <h1>Thank you, see you next time!</h1>
            <Link to = "/Login"><button id = "logBackIn">Log back in?</button></Link>
        </div>
    )
}

