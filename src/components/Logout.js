import React from "react";

async function handleSubmit(event){
    event.preventDefault()
    console.log("this is handle submit for logout")
}
export default function LoggedOut(){
    return(<>
    <form onSubmit ={handleSubmit}>
        <button type = "submit">Logout</button>
        </form></>)}
