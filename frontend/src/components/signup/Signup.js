import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
    const [username, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");

    const getResponse = (event) => {
        event.preventDefault();
        axios.post('http://localhost:5000/signup', {
            username: username,
            email: email,
            password: password,
            passwordCheck: passwordCheck
        }).then((res) => {
            console.log(res.data)
        })
    };
    const onChangeHandler = (event) => {
        if (event.target.id === "username") {
            setUser(event.target.value)
        } else if (event.target.id === "email") {
            setEmail(event.target.value)
        } else if (event.target.id === "password") {
            setPassword(event.target.value)
        } else if (event.target.id === "passwordCheck") {
            setPasswordCheck(event.target.value)
        }
    }
    return (
        <div className="signup">
            <h1>Sign Up</h1>
            <form onSubmit={getResponse}>
                <ul>
                    <label htmlFor="username">Create a username</label>
                    <input id="username" type="text" name="username" placeholder="username" onChange={onChangeHandler}></input>

                    <label htmlFor="email">Enter an email</label>
                    <input id="email" type="email" name="email" placeholder="email" onChange={onChangeHandler}></input>

                    <label htmlFor="password">Create a password</label>
                    <input id="password" type="text" name="password" placeholder="password" onChange={onChangeHandler}></input>

                    <label htmlFor="passwordCheck">Re-enter the password</label>
                    <input id="passwordCheck" type="text" name="passwordCheck" placeholder="passwordCheck" onChange={onChangeHandler}></input>


                    <input type="submit" value="submit"></input>
                </ul>
            </form>
        </div>
    );
}

export default Signup;