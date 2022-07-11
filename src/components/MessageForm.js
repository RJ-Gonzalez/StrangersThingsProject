import React, { useEffect, useState } from "react";
import { Route, Link, Routes, useNavigate } from "react-router-dom";
import {sendMessage, getPosts } from "../api";

export default function MessageForm(){
    const [messageContent, setMessageContent] =useState("")
    const navigate = useNavigate ()
    const authToken = localStorage.getItem("token") ? true : false
   async function handleMessage(event){
        event.preventDefault()
        // token = localStorage.getItem("token")
        // const response = await sendMessage(token, postid, content)
        // const newMessage = response.data.message.content
        // setMessageContent (newMessage)
        // console.log(newMessage, "this is newMessage ln 15");
        try{
            await sendMessage(token,postid,content)
        }catch (error){
            throw error
        }

    }

    return (

    <form onSubmit={handleMessage}>
        <h1 id= "titleMessage">Message Form</h1>
        <label>Message</label>
        <input id="messageInput"
            type = "text"
            placeholder = "Write Message"> 
        </input>
        <button id="messageSubmit">submit</button>
        </form>
        )
}