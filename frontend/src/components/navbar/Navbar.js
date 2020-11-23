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
                <p>Video Game review site for uninformed parents</p>
                <Dropdown />
                <div className="search">
                    <input className="search-bar" type="text" placeholder="🔍  Search" />
                </div>
            </div>
            <div className="user-signout-container">
                <div className="navbar-user">
                    <h2><a href="/profile" className="profile"><img src={Profilepic} className="nav-user-img"></img>
                    <p className="username-text">Username</p></a></h2>
                </div>
                <div className="faq-buttons">
                    <div className="single-faq">
                        <p className="links"><a href="/FAQ" className="faq"><RiQuestionnaireLine /> FAQ</a></p>
                    </div>
                    <div className="single-faq">
                        <p className="links"><a href="/signout" className="faq"><RiQuestionnaireLine /> Sign out</a></p>
                    </div>
                </div>
            </div>
        </nav>
    )
}


export default Navbar;