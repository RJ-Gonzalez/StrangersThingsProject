import React, {useState} from 'react';
import {loginUser} from '../api';

import "./Login.css"

export default function LoggedIn (){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleOnChange = (event) =>{
        const changed = event.target.id
        // console.log(changed, 'this is changed')
        if(changed === 'username'){
            console.log(username, 'this is username')
            setUsername(event.target.value)
        }
        else if(changed === 'password'){
            console.log(password, 'this is password')

            setPassword(event.target.value)
        }
    }
    const handleSubmit = async(event) => {
        event.preventDefault()
        console.log(username, password, "this is username and password")
        const token = await loginUser(username, password)
        localStorage.setItem("token", token)
        console.log(token)
    }
    console.log(username)
    return(<>
    <form id = "loginPage" onSubmit ={handleSubmit}>
        <label> Username: </label>
        <input id ="username"
        placeholder = "Enter Username Here" 
        value = {username} onChange ={handleOnChange} 
        minLength = "6">
        </input>
        <label> Password: </label>
        <input id ="password" 
        placeholder ="Enter Password Here" 
        minLength = "6" 
        onChange ={handleOnChange}>
        </input>
        <button id = "loginButton" type = "submit">Login</button>
    </form>
    </>)
}




