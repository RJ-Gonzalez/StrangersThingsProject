import React, { useState } from "react";
export const cohortName = "2206-FTB-ET-WEB-FT";
export const BASE_URL = `https://strangers-things.herokuapp.com/api/`;

async function handleSubmit(event){
    event.preventDefault()
    console.log("this is handle submit for register")
}
export default function Register(){
    const[username, setUsername] = useState('')
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
                username:'username',
                password: 'password',
            }
        })
    })
    const result = await response.json()
    const token = result.data.token
return result

}catch(error){
    throw error;
}
} 
    return(<>
    <form onSubmit ={handleSubmit}>
        <h1>REGISTER</h1>
     
            <input id = "username"  placeholder = "Enter Username" type = "text" minLength = "6"></input>
            <input id = "password" placeholder = "Enter Password" type = "password" minLength = "6"></input>
            <input id = "confirmPassword"  placeholder = "Confirm Password" type = "password" minLength = "6"></input>
        <div></div>


        <button type = "submit">Create Account</button>
        </form></>)}
