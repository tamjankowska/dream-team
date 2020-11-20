import React, { useState } from 'react';
// import { Dropdown } from 'semantic-ui-react'
import Dropdown from "./Dropdown"
import Eggicorn from "./img/eggicorn.png"
import Profilepic from "../navbar/img/reviewpp.png"
import './Navbar.css';
import { RiQuestionnaireLine } from "react-icons/ri";

const Navbar = () => {
    return (
        <nav>
            <div className="logo-dropdown">
                <a href='/home'>
                    <img className="logo" src={Eggicorn} alt="logo" />
                </a>
                <p>Video Game review site for uninfored parents</p>
                <Dropdown />
            </div>
            <div className="search">
                <input className="search-bar" type="text" placeholder="🔍  Search" />
            </div>
            <div className="navbar-user">
                <h2><a href="/profile" className="profile"><img src={Profilepic} className="nav-user-img"></img>
                    <p>Username</p></a></h2>
            </div>
            <h2 className="links"><a href="/FAQ" className="faq"><RiQuestionnaireLine /> FAQ</a></h2>
            <h2 className="links"><a href="/signout" className="faq"><RiQuestionnaireLine /> FAQ</a></h2>
        </nav>
    )
}
export default Navbar;