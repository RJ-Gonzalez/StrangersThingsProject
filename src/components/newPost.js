import React, { useEffect, useState } from "react";


import { addPosts } from "../api";

export default function newPost (){
  
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [price, setPrice] = useState("");
    const [willDeliver, setWillDeliver] = useState(false);

    const authToken = localStorage.getItem("token") ? true : false

async function handleSubmit(event) {
    event.preventDefault()


    const postDetail = {
        "title" : title, 
        "description": description, 
        "location" :location, 
        "price": price,
        "willDeliver": willDeliver}
    console.log(postDetail, "this is post detail")
    const token = localStorage.getItem("token")
    console.log(token)
    const response = await addPosts(postDetail, token)
    console.log(response, "this is resposne from NewPost")
    // navigate("/Login")
    };
    return (
        <div>
            {authToken === true ?(
            <>
            <p>THIS IS CREATE A NEW POST PAGE</p>
            <h1>Create a New Post</h1>
            <form onSubmit = {handleSubmit}>
                <input
                type = "text"
     
                onChange = {event => setTitle(event.target.value)}
                placeholder = "title"> 
                </input>
                <input
                type = "text"
   
                onChange = {event => setDescription(event.target.value)}
                placeholder = "description">
                </input>
                <input
                type = "text"
   
                onChange = {event => setLocation(event.target.value)}
                placeholder = "location">
                </input>
                <input
                type = "text"
 
                onChange = {event => setPrice(event.target.value)}
                placeholder = "price">
                    {/* need to apply deliver */}
                </input>
                <button type = "Submit">Submit New Post</button>
                </form></>       
                ) : <h2>login first</h2>    } 
        </div>
    )
}
