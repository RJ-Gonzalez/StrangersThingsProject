import React, {useState, useEffect} from 'react'
import { connectProfile, getUser } from "../api";
import {Logout, Loggedout} from "./"


import { Link } from 'react-router-dom';

export default function Profile({}) {


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
    const info = myInfo.data
    console.log(info, "this is info.data line 20")
    const myInfoMapping = info && info.length ? info.map((element, index, array) => {
        return (
          <div>
            <div key={`Profile${index}`}><button>
              <h1>{element.data.posts.messages}</h1>
              <h1>{element.posts.messages.content}</h1>
          
              </button>
            </div>
          </div>
        );
      }) : null ;
      console.log(myInfoMapping, "this is my info mapping")

return (
    <div className="box">
        <h1> Welcome </h1>
       

        <div id = "messageBox">
         {myInfoMapping}
          <p>Messages are Here</p>
        </div>
        <div id = "postBox">
          this will be user post
        </div>
    
      <Link to ='/Logout'> <button onClick={() => { localStorage.removeItem("token");}}>Log Out</button> </Link>
    </div>
    )
}  