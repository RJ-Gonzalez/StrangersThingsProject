import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendMessage } from "../api";

export default function MessageForm(props) {
  const { postId } = props;

  console.log(postId, "this is post id for message");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const content = event.target[0].value;
    const token = localStorage.getItem("token");
    sendMessage(token, postId, content);
    navigate("/Profile")
    console.log(postId, "this is catch id line 27 message form");
  };
  return (
    
    <form onSubmit={handleSubmit}>
      <label id="messageForm">Direct Message: </label>
      <input id="messageInput" type="text" placeholder="Write Message"></input>
      <button id="submitButton">Submit</button>
    </form>
  );
}
