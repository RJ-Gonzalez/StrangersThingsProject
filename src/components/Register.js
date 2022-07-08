import React, { useState } from "react";
import {createUser} from "../api"
export const cohortName = "2206-FTB-ET-WEB-FT";
export const BASE_URL = `https://strangers-things.herokuapp.com/api/`;


export default function Register(){
    const[username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confimPassword, setConfirmPassword] = useState('')

async function handleSubmit(event){
    event.preventDefault()
    console.log("this is handle submit for register");
    const token = await createUser (username, password)
    localStorage.setItem("token", token)
    console.log(token, "This is token from register");
} 
    return(<>
    <form onSubmit ={handleSubmit}>
        <h1>REGISTER</h1>
     
            <input id = "username"  placeholder = "Enter Username" type = "text" minLength = "6" onChange={event => setUsername(event.target.value)}></input>
            <input id = "password" placeholder = "Enter Password" type = "password" minLength = "6" onChange={event => setPassword(event.target.value)}></input>
            <input id = "confirmPassword"  placeholder = "Confirm Password" type = "password" minLength = "6" onChange={event => setConfirmPassword(event.target.value)}></input>
        <div></div>


        <button type = "submit">Create Account</button>
        </form></>)}
