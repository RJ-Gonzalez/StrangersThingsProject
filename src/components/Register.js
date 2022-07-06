import React from "react";

async function handleSubmit(event){
    event.preventDefault()
    console.log("this is handle submit for register")
}
export default function Register(){
    return(<>
    <form onSubmit ={handleSubmit}>
        <button type = "submit">Register</button>
        </form></>)}
