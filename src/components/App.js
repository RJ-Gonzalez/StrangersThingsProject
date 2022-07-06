import React, {useEffect} from 'react';
import { getPosts } from '../api';

import './App.css';
import './index.js';

const App = () => {
    useEffect (()=>{
        getPosts().then((posts)=>{
            console.log(posts);

        })
    })
    return (
    <h1> App Component</h1>)
}

export default App