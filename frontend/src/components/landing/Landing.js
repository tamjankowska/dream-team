import React from "react";
import { BrowserRouter, Route } from 'react-router-dom'
import Signup from "../signup/Signup"

function Landing() {
    return (
        <div className="Landing">
            <h1>Log in</h1>
            <label htmlFor="email">Enter your username</label>
            <input id="email" type="email" name="email" placeholder="Username/email"></input>
            <a href="/signup">Create an Account</a>
        </div>
    );
}
export default Landing;
