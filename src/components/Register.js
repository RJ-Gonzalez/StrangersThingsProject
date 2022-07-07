import React, { useState } from "react";

async function handleSubmit(event){
    event.preventDefault()
    console.log("this is handle submit for register")
}
export default function Register(){
    const[username, setUsername] = useState('')
    return(<>
    <form onSubmit ={handleSubmit}>
        <h1>REGISTER</h1>
        <form id = "registerForm">
            <input id = "username"  placeholder = "Enter Username" type = "text" minLength = "6"></input>
            <input id = "password" placeholder = "Enter Password" type = "password" minLength = "6"></input>
            <input id = "confirmPassword"  placeholder = "Confirm Password" type = "password" minLength = "6"></input>


        </form>
        <button type = "submit">Create Account</button>
        </form></>)}
