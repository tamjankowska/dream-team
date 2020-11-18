import React from 'react';
// import { Dropdown } from 'semantic-ui-react'
import Dropdown from "./Dropdown"
import Eggicorn from "./img/eggicorn.png"
import Karen from "./img/karen.png"
import './Navbar.css';


const Navbar = () => {
    const options = [
        'one', 'two', 'three'
    ];
    const defaultOption = options[0];

    return (
        <nav>
            <img className="logo" src={Eggicorn} />
            <Dropdown />
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