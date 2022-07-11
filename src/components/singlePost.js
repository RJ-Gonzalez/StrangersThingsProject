import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from "react-router";
import { connectProfile } from "../api";
import { Link } from 'react-router-dom';
import Posts from './Posts';

const SinglePost =() =>{

   
      
    return(
        <div>
            {/* {post.description} */}
            this is single post
        </div>
    )
}

export default SinglePost