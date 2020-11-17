import React, { useState} from "react";
import './Landing.css';
import {Redirect} from "react-router-dom"
function Landing() {
    const [loginStatus, setLoginStatus] = useState(null);

    const onSubmit = (event) => {
        event.preventDefault();
        if (loginStatus === true) {
            //will redirect here
        } else if (loginStatus === false) {
            return <Redirect to="/signup" />
        }
    }

    return (
        <div className="landing">
            <h1>Log in</h1>
            <form onSubmit={onSubmit} className="logInForm">

                <label htmlFor="email">Enter your username</label>
                <input id="email-input" type="email" name="email" placeholder="Username/email"></input>

                <label htmlFor="password">Enter your Password</label>
                <input id="password-input" type="password" name="password" placeholder="Password"></input>

                <input id="submit-login" type="submit" value="Log In"></input>
                <a href="/signup" className="signup-link">Create an Account</a>
            </form>
            
        </div>
    );
}
export default Landing;
