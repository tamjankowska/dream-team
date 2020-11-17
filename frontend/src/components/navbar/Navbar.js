import React from 'react';
import Eggicorn from "./img/eggicorn.png"
import Karen from "./img/karen.png"
import './Navbar.css';


const Navbar = () => {
    return (
        <nav>
            <img className="logo" src={Eggicorn} />
            <h2>Games</h2>
            <div className="search">
                <input className="search-bar" type="text" placeholder="🔍  Search" />
            </div>
            <div className="navbar-user">
                <img src={Karen} className="nav-user-img"></img>
                <h3>KoncernedKaren</h3>
            </div>
        </nav>
    )
}


export default Navbar;