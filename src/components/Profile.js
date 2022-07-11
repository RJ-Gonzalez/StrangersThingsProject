import React, {useState, useEffect} from 'react'
import { connectProfile, getUser } from "../api";
import {Logout, Loggedout} from "./"


import { Link } from 'react-router-dom';

export default function Profile() {


    let token = "";
    const [myInfo, setMyInfo] = useState({})

    useEffect(() => {
        token = localStorage.getItem("token")
        async function getMyInfo() {
            const response = await connectProfile(token)
            console.log(response, "returned info from api call")
            setMyInfo(response)
        }
        getMyInfo()
    },[])
    // console.log("messages are", myInfo)
    
 

    const myInfoMapping =myInfo.data && myInfo.data.messages && myInfo.data.messages.length ? myInfo.data.messages.map((element, index) => {
      console.log(element, "this is element line 28")
        return (
            <div key={`Profile${index}`}><button>
              <h2>{element.content}</h2>
              <h2>{element.fromUser.username}</h2>
              </button>
              </div>
          )
}) : <h2>No messages to display</h2>
       
console.log(myInfo, "this is my info")
return (
    <div className="box">
      {/* Works for the first load, second load breaks. */}
       {myInfo.data ? <h1> Welcome {myInfo.data.username} </h1> : null}
       
             {/* <h1> Welcome User </h1> */}
       
{/* ATTEMPTING TO MAP UNSUCCESSFUL WITH BOTH TRIES, LOOK ABOVE FOR BOTH MAPPING TECHNIQUES */}
        <div id = "messageBox">
        
          <p>Messages are Here</p>
          {myInfoMapping} 
    
        </div>
        <div id = "postBox">
          this will be user post
        </div>
      <Link to ="/NewPost"><button id = 'newPost'>Create New Post</button></Link>
      <Link to ='/Posts'><button id = 'singlePost'>View All Posts</button></Link>  
      <Link to ='/SinglePost'><button id = 'singlePost'>Single Post View</button></Link>
      <Link to ='/Logout'> <button id = 'logOut' onClick={() => { localStorage.removeItem("token");}}>Log Out</button> </Link>
    </div>
    )
}  