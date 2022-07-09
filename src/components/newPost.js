import React, { useEffect, useState } from "react";
import { addPost } from "../api";

export default function newPost (){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [price, setPrice] = useState("");
    const [willDeliver, setWillDeliver] = useState(false);
}