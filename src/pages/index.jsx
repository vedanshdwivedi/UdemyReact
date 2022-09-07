import React, { useState } from "react";
import { BrowserRouter, Router, Route } from 'react-router-dom';
import axios from 'axios';
// import { Buffer } from "buffer";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleClick = () => {


        axios.post("https://5000-vedanshdwiv-flaskauthen-ptg78of9zyd.ws-us63.gitpod.io/login", {}, {
            method: "POST",
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic '+btoa(`${username}:${password}`)
            }
        }).then(resp => {
            if(resp.status === 200) return resp.json()
            else alert("There is some error");
        }).catch(err => {
            console.log(`Error is ${err}`)
        });
        
        // fetch("https://UdemyTutorial.vedanshdwivedi1.repl.co/login", { 
        // method: 'post', 
        // headers: new Headers({
        //         'Authorization': 'Basic '+btoa(`${username}:${password}`)
        //     }), 
        // }).then(resp => {
        //     if(resp.status === 200) return resp.json();
        //     else alert("There is some error");
        // }).catch(err => console.log(`Error is ${err}`));
        setUsername("");
        setPassword("");
    }

    return (<>
        <h1>Login</h1>
        <div>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleClick} >Login</button>
        </div>
    </>);
};

export default LoginPage;