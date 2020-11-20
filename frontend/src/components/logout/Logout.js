import session from 'express-session';
import React from 'react';

const Logout = () => {
    sessionStorage.removeItem('loggedIn');
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('reviewer');
    // add in useEffect to return, redirect to landing/login page after ~5 seconds
    return (
        <div>
            <h1>You have logged out.</h1>
        </div>
    )
}

export default Logout;