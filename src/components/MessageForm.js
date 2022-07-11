import React, { useEffect, useState } from "react";
import { Route, Link, Routes, useNavigate } from "react-router-dom";
import { deletePosts, getPosts, sendMessage,connectProfile } from "../api";
import newPost from "./NewPost";

export default function MessageForm(props){
    const {postId, token} = props
    // const [messageContent, setMessageContent] =useState("")
//     const navigate = useNavigate ()
//    async function handleMessage(event){
//         event.preventDefault()
//         const token = localStorage.getItem("token")

//         const response = await sendMessage(token, postid, content)

//     }
console.log(postId, "this is post id for message")
const navigate = useNavigate();

  const handleSubmit = (event)=>{
    event.preventDefault()
    const content = event.target[0].value
    const token = localStorage.getItem("token")
    sendMessage(token, postId, content)
    console.log(postId, "this is catch id line 27 message form")
  }
// const [posts, setPosts] = useState([]);
// const authToken = localStorage.getItem("token") ? true : false
// const catchId = (id) => { 
//   setPostValue(id)
//   return postValue
// }
// console.log(postValue, "this is postValue line 14")
// useEffect(() => {
//   getPosts()
//     .then((response) => {
//       console.log(response, 'respnse from Posts')
//       const posts = response.data.posts;
//       setPosts(posts);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }, []);
// console.log(posts);
// const postMapping = posts.map((post,index)=>{
//     console.log(post, "this is line 38")
//     return (
//         <div key ={`MessgeForm${index}`}>
//          Replying to: {post.author._id}
//         </div>
//     )})

// onSubmit ={handleMessage}
    return (<form onSubmit = {handleSubmit} >
        <h1>Message Form</h1>
        <label>Message to: </label>
        <input
            type = "text"
            placeholder = "Write Message"> 
        </input>
        <button>submit</button>
        </form>
        )
}