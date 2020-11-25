import React, { useState } from 'react';
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
                <p className = 'nav-header'>Video Game review site for uninformed parents</p>
                <Dropdown />
            </div>
            <div className="user-signout-container">
                <div className="navbar-user">
                    <h2><a href="/profile" className="profile"><img src={Profilepic} className="nav-user-img"></img>
                    <p className="username-text">{sessionStorage.getItem('username')} </p></a></h2>
                </div>
                <div className="faq-buttons">
                    <div className="single-faq">
                        <p className="links"><a href="/FAQ" className="faq"><RiQuestionnaireLine /> FAQ</a></p>
                    </div>
                    <div className="single-faq">
                        <p className="links"><a href="/logout" className="faq"><RiQuestionnaireLine /> Sign out</a></p>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;