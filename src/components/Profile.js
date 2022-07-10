import React, {useState, useEffect} from 'react'
import { connectProfile } from "../api";

import { Link } from 'react-router-dom';

export default function Profile() {
    let token = "";
    const [myInfo, setMyInfo] = useState({})
    useEffect(() => {
        token = localStorage.getItem("token")
        async function getMyInfo() {
            const myReturnedInfo = await connectProfile(token)
            console.log(myReturnedInfo, "returned info from api call")
            setMyInfo(myReturnedInfo)
        }
        getMyInfo(myInfo)
        // .then((response))
        console.log(getMyInfo(myInfo))
    },[])

    const info = myInfo.data
    
    const myInfoMapping = myInfo && myInfo.length ? myInfo.map((element, index, array) => {
        return (
          <div>
            <div key={`Profile${index}`}><button>
              <h1>{element.data.messages._id}</h1>
              <h1>{element.data.messages.content}</h1>
          
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
        <Link to ='/Logout'> Logout </Link>
    </div>
    )
}  