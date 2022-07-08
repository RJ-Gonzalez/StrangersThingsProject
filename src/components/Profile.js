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
    },[])
    console.log(myInfo)
    const info = myInfo.data
    
    const myInfoMapping = myInfo && myInfo.length ? myInfo.map((inbox, index) => {
        return (
          <div>
            <div key={`Profile${index}`}><button>
              <h1>{inbox.message}</h1>
              </button>
            </div>
          </div>
        );
      }) : null ;

return (
    <div className="box">
        <h1> Welcome </h1>
        <p>Messages are Here</p>
        <div id = "messageBox">
         {/* {myInfoMapping} */}
        </div>
        <Link to ='/Logout'> Logout </Link>
    </div>
    )
}  
