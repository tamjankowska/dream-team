import React from "react";
import Profilepic from "../navbar/img/reviewpp.png"
import '../profile/Profile.css'
import Dropdown from "../navbar/Dropdown"

const Profile = () => {

    return (
        <div className="whole-profile">
            <div className="profile-sidebar">
                <div className="profile-sidebar-top">
                    <img src={Profilepic} alt="profileimg" className="profile-pic" />
                    <div className="profile-info">
                        <p>username: Karenkaren</p>
                        <p>email: karen@karne.com</p>
                    </div>
                </div>
                <Dropdown />
            </div>
            <div className="profile-main">
                <h2 className="review-title">Your reviews</h2>
                <p>Review carrosel</p>
            </div>
        </div>
    );
}

export default Profile;