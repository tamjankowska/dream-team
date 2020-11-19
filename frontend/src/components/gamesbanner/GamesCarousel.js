import React, {useState} from 'react';
import './GamesCarousel.css';
import Carousel from 'react-bootstrap/Carousel';
import spiderman from '../images/spiderman.jpg';
import demonsSouls from '../images/demonsSouls.jpg';
import fifa21 from '../images/fifa21.jpg';
import codBlackOps from '../images/codBlackOps.jpg';
import acValhalla from '../images/acValhalla.jpeg';
import godfall from '../images/godfall.jpg';
import tonyHawk from '../images/tonyHawk.jpg';
import ufc4 from '../images/ufc4.jpg';
import nbank21 from '../images/nbank21.jpeg';
import sackboy from '../images/sackboy.jpg';
import marioSonic from '../images/marioSonic.jpg';
import persistence from '../images/persistence.jpg';
import residentEvil from '../images/residentEvil.jpg';
import catQuestII from '../images/catQuestII.png';
import animalCrossing from '../images/animalCrossing.jpg';
import hogwartsLegacy from '../images/hogwartsLegacy.jpg';
import shadowlands from '../images/shadowlands.jpg';
import darkPictures from '../images/darkPictures.jpg';
import bendy from '../images/bendy.jpg';
import evilWithin from '../images/evilWithin.jpg';

function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="carousel-container">
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
            <div className="column">
                <h1 className="carousel-title">Sports</h1>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item className="carousel-item">
                    <img
                        className="carousel-image"
                        src={fifa21}
                        alt="First slide"
                    />
                <Carousel.Caption>
                    <h3>Fifa 21</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                    <img
                        className="carousel-image"
                        src={tonyHawk}
                        alt="Second slide"
                    />

                <Carousel.Caption>
                    <h3>Tony Hawk's Pro Skater Remastered</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                    <img
                        className="carousel-image"
                        src={ufc4}
                        alt="Third slide"
                    />

                <Carousel.Caption>
                    <h3>UFC 4</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                    <img
                        className="carousel-image"
                        src={nbank21}
                        alt="Fourth slide"
                    />

                <Carousel.Caption>
                    <h3>NBA 2K21</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                    <img
                        className="carousel-image"
                        src={marioSonic}
                        alt="Fourth slide"
                    />

                <Carousel.Caption>
                    <h3>Mario and Sonic Olympic Games Tokyo 2020</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            </div>
            <div className="column">
                <h1 className="carousel-title">Shooter</h1>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item className="carousel-item">
                    <img
                        className="carousel-image"
                        src={codBlackOps}
                        alt="First slide"
                    />
                <Carousel.Caption>
                    <h3>Call Of Duty: Black Ops Cold War</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                <img
                    className="carousel-image"
                    src={persistence}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>The Persistence</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                    <img
                        className="carousel-image"
                        src={residentEvil}
                        alt="Third slide"
                    />

                <Carousel.Caption>
                    <h3>Resident Evil 2</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            </div>
            <div className="column">
                <h1 className="carousel-title">RPG</h1>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item className="carousel-item">
                    <img
                        className="carousel-image"
                        src={godfall}
                        alt="First slide"
                    />
                <Carousel.Caption>
                    <h3>Godfall</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                <img
                    className="carousel-image"
                    src={catQuestII}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Cat Quest II</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                    <img
                        className="carousel-image"
                        src={animalCrossing}
                        alt="Third slide"
                    />

                <Carousel.Caption>
                    <h3>Animal Crossing: New Horizons</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                    <img
                        className="carousel-image"
                        src={hogwartsLegacy}
                        alt="Third slide"
                    />

                <Carousel.Caption>
                    <h3>Hogwarts Legacy</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            </div>
            <div className="column">
                <h1 className="carousel-title">MMORPG</h1>
                <Carousel>
                <Carousel.Item className="carousel-item">
                    <img
                        className="carousel-image"
                        src={shadowlands}
                        alt="First slide"
                    />
                <Carousel.Caption>
                    <h3>Shadowlands</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            </div>
            <div className="column">
                <h1 className="carousel-title">Horror</h1>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item className="carousel-item">
                    <img
                        className="carousel-image"
                        src={darkPictures}
                        alt="First slide"
                    />
                <Carousel.Caption>
                    <h3>The Dark Pictures Anthology: Little Hope</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                <img
                    className="carousel-image"
                    src={bendy}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Bendy and the Ink Machine</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                    <img
                        className="carousel-image"
                        src={persistence}
                        alt="Third slide"
                    />

                <Carousel.Caption>
                    <h3>The Persistence</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                    <img
                        className="carousel-image"
                        src={residentEvil}
                        alt="Third slide"
                    />

                <Carousel.Caption>
                    <h3>Resident Evil 2</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                    <img
                        className="carousel-image"
                        src={evilWithin}
                        alt="Third slide"
                    />

                <Carousel.Caption>
                    <h3>The Evil Within 2</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}

export default ControlledCarousel;