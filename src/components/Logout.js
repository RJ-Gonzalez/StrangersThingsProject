import React from "react";

async function handleSubmit(event){
    event.preventDefault()
    console.log("this is handle submit for logout")}

export default function LoggedOut(){
    return(
        <div>
            Come back soon!
            <button>Log back in?</button>
        </div>
    )
}

