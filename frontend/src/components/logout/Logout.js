import session from 'express-session';
import React from 'react';
import Landing from '../landing/Landing'
import "../homepage/Homepage.css"

const Logout = () => {
    sessionStorage.removeItem('loggedIn');
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('reviewer');
    sessionStorage.removeItem('username');
    // add in useEffect to return, redirect to landing/login page after ~5 seconds
    return (
        <div>
            <h1 className="title">You have logged out.</h1>
            <Landing />
        </div>
    )
}

export default Logout;