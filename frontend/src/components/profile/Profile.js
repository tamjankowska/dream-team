import React, { useEffect, useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import Profilepic from "../navbar/img/reviewpp.png"
import '../profile/Profile.css'
import Dropdown from "../navbar/Dropdown"
import spiderman from '../images/spiderman.jpg';
import demonsSouls from '../images/demonsSouls.jpg';
import acValhalla from '../images/acValhalla.jpeg';
import godfall from '../images/godfall.jpg';
import sackboy from '../images/sackboy.jpg';
import "../gamescarousel/GamesCarousel.css"
import Landing from "../landing/Landing"


const Profile = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (!sessionStorage.getItem("loggedIn")) {
            return;
        }
    })    

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div>
        {(!sessionStorage.getItem('loggedIn')) ? <div><h1 className="title">You are not logged in</h1><Landing /></div> :
            <div className="whole-profile">
                <div className="profile-sidebar">
                    <div className="profile-sidebar-top">
                        <img src={Profilepic} alt="profileimg" className="profile-pic" />
                        <div className="profile-info">
                            <p>username: {sessionStorage.getItem('username')}</p>
                            <p>email: {sessionStorage.getItem('email')}</p>
                        </div>
                    </div>
                    <div className="profile-dropdown">
                        <Dropdown />
                    </div>
                </div>
                <div className="profile-main">
                    <h2 className="review-title">Your reviews</h2>
                    <div className="reviewer-review">
                        <div className="column">
                            <h1 className="carousel-title">Action/Adventure</h1>
                            <Carousel activeIndex={index} onSelect={handleSelect}>
                                <Carousel.Item className="carousel-item">
                                    <img
                                        className="carousel-image"
                                        src={spiderman}
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Spiderman</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item className="carousel-item">
                                    <img
                                        className="carousel-image"
                                        src={demonsSouls}
                                        alt="Second slide"
                                    />

                                    <Carousel.Caption>
                                        <h3>Demon's Souls</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item className="carousel-item">
                                    <img
                                        className="carousel-image"
                                        src={acValhalla}
                                        alt="Third slide"
                                    />

                                    <Carousel.Caption>
                                        <h3>Assassin's Creed Valhalla</h3>
                                        <p>
                                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item className="carousel-item">
                                    <img
                                        className="carousel-image"
                                        src={sackboy}
                                        alt="Fourth slide"
                                    />

                                    <Carousel.Caption>
                                        <h3>Sackboy: A Big Adventure</h3>
                                        <p>
                                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item className="carousel-item">
                                    <img
                                        className="carousel-image"
                                        src={godfall}
                                        alt="Fifth slide"
                                    />

                                    <Carousel.Caption>
                                        <h3>Godfall</h3>
                                        <p>
                                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            }
        </div>
    );
}

export default Profile;