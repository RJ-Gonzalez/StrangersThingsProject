import React, { useEffect, useState } from "react";
import { Route, Link, Routes, useNavigate } from "react-router-dom";
import { deletePosts, getPosts } from "../api";

export default function MessageForm(){
    const [messageContent, setMessageContent] =useState("")
    const navigate = useNavigate ()
    const handleMessageContent = async (event)
    return (<form>
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