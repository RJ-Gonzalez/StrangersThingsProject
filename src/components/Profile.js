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
    },[])

return (
    <div className="box">
        <h1> Welcome </h1>
        <p>Messages are Here</p>
        <div id = "messageBox">
         
        </div>
        <Link to ='/Logout'> Logout </Link>
    </div>
    )
}  
