import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {createUser} from "../api"
export const cohortName = "2206-FTB-ET-WEB-FT";
export const BASE_URL = `https://strangers-things.herokuapp.com/api/`;


export default function Register(){
    let navigate = useNavigate();
    const[newUsername, setnewUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confimPassword, setConfirmPassword] = useState('')

async function handleSubmit(event){
    event.preventDefault()
    console.log("this is handle submit for register");
    const token = await createUser (newUsername, password)
    localStorage.setItem("token", token)
    console.log(token, "This is token from register");
    navigate("/Login")
} 
    return(<>
    <form onSubmit ={handleSubmit}>
        <h1>REGISTER</h1>
     
            <input id = "newUsername"  
            placeholder = "Enter newUsername" 
            type = "text" minLength = "6"
            onChange={event => setnewUsername(event.target.value)}>

            </input>
            <input id = "password" 
            placeholder = "Enter Password" 
            type = "password" minLength = "6" 
            onChange={event => setPassword(event.target.value)}>
            </input>
            <input id = "confirmPassword"  
            placeholder = "Confirm Password" 
            type = "password" minLength = "6" 
            onChange={event => setConfirmPassword(event.target.value)}>
            </input>
        <div></div>
        <button type = "submit">Create Account</button>
        </form></>)}
