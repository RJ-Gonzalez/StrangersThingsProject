import React, { useState } from "react";
import {getUser} from "../api"
export const cohortName = "2206-FTB-ET-WEB-FT";
export const BASE_URL = `https://strangers-things.herokuapp.com/api/`;

async function handleSubmit(event){
    event.preventDefault()
    console.log("this is handle submit for register");
    const token = await getUser (username, password)
    localStorage.setItem("token", token)
    console.log(token, "This is token from register");
}
export default function Register(){
    const[username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confimPassword, setConfirmPassword] = useState('')
    const createUser = async (event)=>{
        try {
        event.preventDefault()
    const response = await fetch (`${BASE_URL}${cohortName}/users/Register`,{
        method:"POST",
        headers: {
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            user:{
                username: username,
                password: password,
            }
        })
    })
    const result = await response.json()
    const token = result.data.token
    //**** */ attempting to get user from API
    const userInfo = await getUser (token)
    localStorage.setItem("token", token)
    const tokenFromStorage = localStorage.getItem("token")
    console.log(token)
    
return result

}catch(error){
    throw error;
}
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
