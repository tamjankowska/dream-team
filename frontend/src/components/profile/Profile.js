import React from "react";
import Profilepic from "../navbar/img/reviewpp.png"

const Profile = () => {

    return (
        <div className="whole-profile">
            <div className="profile-sidebar">
                <div className="profile-sidebar-top">
                    <img src={Profilepic} alt="profileimg" className="profile-pic" />
                    <p>username: Karenkaren</p>
                    <p>email: karen@karne.com</p>
                </div>
                <p>Categories</p>
            </div>
            <div className="profile-main">
                <h2 className="review-title">Your reviews</h2>
                <p>review carrosel</p>
            </div>
        </div>
    );
}

export default Profile;