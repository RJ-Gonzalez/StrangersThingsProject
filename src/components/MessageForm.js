import React, { useEffect, useState } from "react";
import { Route, Link, Routes, useNavigate } from "react-router-dom";
import { deletePosts, getPosts } from "../api";

export default function MessageForm(){
    return (<form>
        <h1>Message Form</h1>
        <label>message</label>
        <input id = "user message">write message</input>
        <button>submit</button>
        </form>
        )
}