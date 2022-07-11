import React, { useEffect, useState } from "react";
import { Route, Link, Routes, useNavigate } from "react-router-dom";
import { deletePosts, getPosts, sendMessage } from "../api";
import newPost from "./NewPost";

export default function MessageForm(token){
    const [messageContent, setMessageContent] =useState("")
    const navigate = useNavigate ()
   async function handleMessage(event){
        event.preventDefault()
        token = localStorage.getItem("token")
        const response = await sendMessage(token, postid, content)

    }


    return (<form onSubmit ={handleMessage}>
        <h1>Message Form</h1>
        <label>Message</label>
        <input
            type = "text"
            placeholder = "Write Message"> 
        </input>
        <button>submit</button>
        </form>
        )
}