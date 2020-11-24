import session from 'express-session';
import React from 'react';
import Landing from '../landing/Landing'
import '../landing/Landing.css';

const Logout = () => {
    sessionStorage.removeItem('loggedIn');
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('reviewer');
    // add in useEffect to return, redirect to landing/login page after ~5 seconds
    return (
        <div>
            <h1 className="login-title">You have logged out.</h1>
            <Landing />
        </div>
    )
}

export default Logout;