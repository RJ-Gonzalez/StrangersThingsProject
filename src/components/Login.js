import React from 'react';

async function handleSubmit(event){
    event.preventDefault()
    console.log("this is handle submit")
}

export default function LoggedIn(){
    return(<>
    <form onSubmit ={handleSubmit}>
        <label> Username: </label>
        <input id ="username"
        placeholder = "Enter Username Here">
        </input>
        <label> Password: </label>
        <input id ="password" 
        placeholder ="Enter Password Here"></input>
        <button type = "submit">Login</button>
    </form>
    </>)
}




