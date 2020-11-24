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
    const [index1, setIndex1] = useState(0);
    const [index2, setIndex2] = useState(0);
    const [index3, setIndex3] = useState(0);
    const [index4, setIndex4] = useState(0);
    const [index5, setIndex5] = useState(0);

    const handleSelect1 = (selectedIndex, e) => {
        setIndex1(selectedIndex);
    };

    const handleSelect2 = (selectedIndex, e) => {
        setIndex2(selectedIndex);
    };

    const handleSelect3 = (selectedIndex, e) => {
        setIndex3(selectedIndex);
    };

    const handleSelect4 = (selectedIndex, e) => {
        setIndex4(selectedIndex);
    };

    const handleSelect5 = (selectedIndex, e) => {
        setIndex5(selectedIndex);
    };

    return (
        <div className="carousel-container">
            <div className="featured-games-container">
                <div className="featured-title-div">
                    <h1 className="featured-games-title">Featured Games</h1>
                </div>
                <div className="featured-games-sub-cont">
                    <div className="img-n-caption">
                        <a href = '/review' onClick = {() => {sessionStorage.setItem('gameID', '5fb3dcfd81e3145848abb7bf')}}>
                            <img src={spiderman} alt="Spiderman" />
                            <p class="text-1">Spiderman</p>
                        </a>
                    </div>
                    <div className="img-n-caption">
                        <a href = '/review' onClick = {() => {sessionStorage.setItem('gameID', '5fb3df0181e3145848abb7c0')}}>
                            <img src={demonsSouls} alt="Demon's Souls" />
                            <p className="text-2">Demon's Souls</p>
                        </a>
                    </div>
                    <div className="img-n-caption">
                        <a href = '/review' onClick = {() => {sessionStorage.setItem('gameID', '5fb3e21081e3145848abb7c2')}}>
                            <img src={fifa21} alt="Fifa 21" />
                            <p className="text-3">Fifa 21</p>
                        </a>
                    </div>
                    <div className="img-n-caption">
                        <a href = '/review' onClick = {() => {sessionStorage.setItem('gameID', '5fb3e25c81e3145848abb7c3')}}>
                            <img src={codBlackOps} alt="Call Of Duty: Black Ops" />
                            <p className="text-4">Call Of Duty: Black Ops</p>
                        </a>
                    </div>
                    <div className="img-n-caption">
                        <a href = '/review' onClick = {() => {sessionStorage.setItem('gameID', '5fb3e34881e3145848abb7c4')}}>
                            <img src={acValhalla} alt="Assassin's Creed Valhalla" />
                            <p className="text-5">Assassin's Creed Valhalla</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="column">
                <h1 className="carousel-title">Action/Adventure</h1>
                <Carousel activeIndex={index1} onSelect={handleSelect1}>
                
                <Carousel.Item className="carousel-item">
                <a href = '/review' onClick = {() => {sessionStorage.setItem('gameID', '5fb3dcfd81e3145848abb7bf')}}>
                    <img
                        className="carousel-image"
                        src={spiderman}
                        alt="First slide"
                    />
                </a>
                    <Carousel.Caption className="carousel-caption">
                    <a href = '/review' onClick = {() => {sessionStorage.setItem('gameID', '5fb3dcfd81e3145848abb7bf')}}>
                        <h3>Spiderman</h3>
                        <p>
                            In the latest adventure in Marvel’s Spider-Man, teenager Miles Morales is following in the footsteps of his mentor, Peter Parker, as a new Spider-Man. To save New York, Miles must take up the mantle of Spider-Man and own it.
                        </p>
                    </a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                
                <img
                    className="carousel-image"
                    src={demonsSouls}
                    alt="Second slide"
                />

                <Carousel.Caption className="carousel-caption">
                <a href = '/review' onClick = {() => {sessionStorage.setItem('gameID', '5fb3df0181e3145848abb7c0')}}>
                    <h3>Demon's Souls</h3>
                    <p>
                        From Bluepoint Games comes a remake of the PlayStation classic, Demon’s Souls™. Entirely rebuilt from the ground up and masterfully enhanced, this remake introduces the horrors of a fog-laden, dark fantasy land to a whole new generation of gamers.
                    </p>
                </a>    
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                    <img
                    className="carousel-image"
                    src={acValhalla}
                    alt="Third slide"
                />

                <Carousel.Caption className="carousel-caption">
                <a href = '/review' onClick = {() => {sessionStorage.setItem('gameID', '5fb3e34881e3145848abb7c4')}}>
                    <h3>Assassin's Creed Valhalla</h3>
                    <p>
                        In Assassin’s Creed Valhalla, you are Eivor, a fierce Viking warrior raised on tales of battle and glory. Explore a dynamic and beautiful open world set against the brutal backdrop of England’s Dark Ages.
                    </p>
                </a>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                    <img
                        className="carousel-image"
                        src={sackboy}
                    alt="Fourth slide"
                    />

                <Carousel.Caption className="carousel-caption">
                <a href = '/review' onClick = {() => {sessionStorage.setItem('gameID', '5fb3e4da81e3145848abb7c6')}}>
                    <h3>Sackboy: A Big Adventure</h3>
                    <p>
                        Explore here, there and everywhere as you utilise Sackboy’s cool, diverse move-set to face a huge variety of thrilling challenges, fierce enemies and startling surprises. Take on side-splitting challenges in local and online* party play.
                    </p>
                </a>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                    <img
                        className="carousel-image"
                        src={godfall}
                        alt="Fifth slide"
                    />

                <Carousel.Caption className="carousel-caption">
                <a href = '/review' onClick = {() => {sessionStorage.setItem('gameID', '5fb3e5ce81e3145848abb7c7')}}>
                    <h3>Godfall</h3>
                    <p>
                        Aperion is on the precipice of ruin. You are the last of the Valorian knights, god-like warriors able to equip Valorplates, legendary armor sets that transform wielders into unstoppable masters of melee combat.
                    </p>
                </a>
                </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            </div>
            <div className="column">
                <h1 className="carousel-title">Sports</h1>
                <Carousel activeIndex={index2} onSelect={handleSelect2}>
                <Carousel.Item className="carousel-item">
                    <img
                        className="carousel-image"
                        src={fifa21}
                        alt="First slide"
                    />
                <Carousel.Caption className="carousel-caption">
                <a href = '/review' onClick = {() => {sessionStorage.setItem('gameID', '5fb3e21081e3145848abb7c2')}}>
                    <h3>Fifa 21</h3>
                    <p>
                        Win as one in EA SPORTS™ FIFA 21, powered by Frostbite™. Whether it's on the streets or in the stadium, FIFA 21 has more ways to play than ever before, including the UEFA Champions League and CONMEBOL Libertadores.
                    </p>
                </a>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                    <img
                        className="carousel-image"
                        src={tonyHawk}
                        alt="Second slide"
                    />

                <Carousel.Caption className="carousel-caption">
                <a href = '/review' onClick = {() => {sessionStorage.setItem('gameID', '5fb3ef1081e3145848abb7d1')}}>
                    <h3>Tony Hawk's Pro Skater Remastered</h3>
                    <p>
                        Developed by the masters of the remasters – Vicarious Visions – the games that defined a generation are back and will blend original levels, classic pro skaters, old-school tricks, iconic songs from the original franchise, and more.
                    </p>
                </a>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                    <img
                        className="carousel-image"
                        src={ufc4}
                        alt="Third slide"
                    />

                <Carousel.Caption className="carousel-caption">
                <a href = '/review' onClick = {() => {sessionStorage.setItem('gameID', '5fb3ef7681e3145848abb7d2')}}>
                    <h3>UFC 4</h3>
                    <p>
                        In EA SPORTS UFC 4 the fighter you become is shaped by your fight style, your achievements, and your personality. Experience the origins of combat sports in two all-new environments, The Kumite and The Backyard, or challenge the world in new Blitz Battles or Online World Championships to become the undisputed champ.
                    </p>
                </a>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                    <img
                        className="carousel-image"
                        src={nbank21}
                        alt="Fourth slide"
                    />

                <Carousel.Caption className="carousel-caption">
                <a href = '/review' onClick = {() => {sessionStorage.setItem('gameID', '5fb3efc881e3145848abb7d3')}}>
                    <h3>NBA 2K21</h3>
                    <p>
                        NBA 2K21 is the latest title in the world-renowned, best-selling NBA 2K series, delivering an industry-leading sports video game experience on PlayStation 4. NBA 2K21 offers one-of-a-kind immersion into all facets of NBA basketball and culture - where Everything is Game.
                    </p>
                </a>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                    <img
                        className="carousel-image"
                        src={marioSonic}
                        alt="Fourth slide"
                    />

                <Carousel.Caption className="carousel-caption">
                <a href = '/review' onClick = {() => {sessionStorage.setItem('gameID', '5fb3f01181e3145848abb7d4')}}>
                    <h3>Mario and Sonic Olympic Games Tokyo 2020</h3>
                    <p>
                        Go for gold as you compete in action‐packed sports games, including 4 brand new events to Tokyo 2020—Skateboarding, Karate, Surfing, and Sport Climbing, as well as a large selection of classic events. Play as Mario, Sonic, Yoshi, Luigi, Dr. Eggman, and many more.
                    </p>
                </a>
                </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            </div>
            <div className="column">
                <h1 className="carousel-title">Shooter</h1>
                <Carousel activeIndex={index3} onSelect={handleSelect3}>
                <Carousel.Item className="carousel-item">
                    <img
                        className="carousel-image"
                        src={codBlackOps}
                        alt="First slide"
                    />
                <Carousel.Caption className="carousel-caption">
                <a href = '/review' onClick = {() => {sessionStorage.setItem('gameID', '5fb3e25c81e3145848abb7c3')}}>
                    <h3>Call Of Duty: Black Ops Cold War</h3>
                    <p>
                        Black Ops Cold War will drop fans into the depths of the Cold War’s volatile geopolitical battle of the early 1980s. Players will come face-to-face with historical figures and hard truths, as they battle around the globe.
                    </p>
                </a>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                <img
                    className="carousel-image"
                    src={persistence}
                    alt="Second slide"
                />

                <Carousel.Caption className="carousel-caption">
                <a href = '/review' onClick = {() => {sessionStorage.setItem('gameID', '5fb3ed2a81e3145848abb7ce')}}>
                    <h3>The Persistence</h3>
                    <p>
                        A brutal take on the survival-horror genre that integrates rogue-like design elements to give the action an extra edge. Procedurally generated stages that change with each playthrough, creating a labyrinth-like experience that adds to the tension.
                    </p>
                </a>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                    <img
                        className="carousel-image"
                        src={residentEvil}
                        alt="Third slide"
                    />

                <Carousel.Caption className="carousel-caption">
                <a href = '/review' onClick = {() => {sessionStorage.setItem('gameID', '5fb3eddd81e3145848abb7cf')}}>
                    <h3>Resident Evil 2</h3>
                    <p>
                        The genre-defining masterpiece Resident Evil 2 returns, completely rebuilt from the ground up for a deeper narrative experience. Using Capcom’s proprietary RE Engine, Resident Evil 2 offers a fresh take on the classic survival horror saga with breathtakingly realistic visuals.
                    </p>
                </a>
                </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            </div>
            <div className="column">
                <h1 className="carousel-title">RPG</h1>
                <Carousel activeIndex={index4} onSelect={handleSelect4}>
                <Carousel.Item className="carousel-item">
                    <img
                        className="carousel-image"
                        src={godfall}
                        alt="First slide"
                    />
                <Carousel.Caption className="carousel-caption">
                <a href = '/review' onClick = {() => {sessionStorage.setItem('gameID', '5fb3e5ce81e3145848abb7c7')}}>
                    <h3>Godfall</h3>
                    <p>
                        Aperion is on the precipice of ruin. You are the last of the Valorian knights, god-like warriors able to equip Valorplates, legendary armor sets that transform wielders into unstoppable masters of melee combat.
                    </p>
                </a>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                <img
                    className="carousel-image"
                    src={catQuestII}
                    alt="Second slide"
                />

                <Carousel.Caption className="carousel-caption">
                <a href = '/review' onClick = {() => {sessionStorage.setItem('gameID', '5fb3e87481e3145848abb7cb')}}>
                    <h3>Cat Quest II</h3>
                    <p>
                        Cat Quest is an open-world action-RPG set in a fantasy realm of cats. Sequel to the award-winning original, Cat Quest II now lets you play solo or with a friend, as both a cat and dog as you embark on an epic journey!
                    </p>
                </a>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                    <img
                        className="carousel-image"
                        src={animalCrossing}
                        alt="Third slide"
                    />

                <Carousel.Caption className="carousel-caption">
                <a href = '/review' onClick = {() => {sessionStorage.setItem('gameID', '5fb3f12c81e3145848abb7d5')}}>
                    <h3>Animal Crossing: New Horizons</h3>
                    <p>
                        Animal Crossing: New Horizons is a life-simulation game for players looking to escape the reality of life and experience an Island Getaway.
                    </p>
                </a>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                    <img
                        className="carousel-image"
                        src={hogwartsLegacy}
                        alt="Third slide"
                    />

                <Carousel.Caption className="carousel-caption">
                <a href = '/review' onClick = {() => {sessionStorage.setItem('gameID', '5fb3f19981e3145848abb7d6')}}>
                    <h3>Hogwarts Legacy</h3>
                    <p>
                        Hogwarts Legacy is filled with immersive magic, putting players at the centre of their adventure. They will grow their character’s abilities as they master powerful spells and select companions to help them face off deadly enemies.
                    </p>
                </a>    
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
                <Carousel.Caption className="carousel-caption">
                <a href = '/review' onClick = {() => {sessionStorage.setItem('gameID', '5fb3e70381e3145848abb7c8')}}>
                    <h3>Shadowlands</h3>
                    <p>
                        The Shadowlands, resting place for every mortal soul—virtuous or vile—that has ever lived. Journey beyond the veil, discover five otherworldly realms of wonder and horror, gain incredible powers — and save Azeroth from all-consuming darkness.
                    </p>
                </a>
                </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            </div>
            <div className="column">
                <h1 className="carousel-title">Horror</h1>
                <Carousel activeIndex={index5} onSelect={handleSelect5}>
                <Carousel.Item className="carousel-item">
                    <img
                        className="carousel-image"
                        src={darkPictures}
                        alt="First slide"
                    />
                <Carousel.Caption className="carousel-caption">
                <a href = '/review' onClick = {() => {sessionStorage.setItem('gameID', '5fb3e8d981e3145848abb7cc')}}>
                    <h3>The Dark Pictures Anthology: Little Hope</h3>
                    <p>
                        Trapped in the abandoned town of Little Hope, 4 college students and their professor must escape the nightmarish visions that relentlessly pursue them through an impenetrable fog.
                    </p>
                </a>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                <img
                    className="carousel-image"
                    src={bendy}
                    alt="Second slide"
                />

                <Carousel.Caption className="carousel-caption">
                <a href = '/review' onClick = {() => {sessionStorage.setItem('gameID', '5fb3ec7181e3145848abb7cd')}}>
                    <h3>Bendy and the Ink Machine</h3>
                    <p>
                        Bendy and the Ink Machine™ is a first-person puzzle-action-horror game with a unique cartoon atmosphere and an intense, frightening storyline that keeps you guessing throughout. Fight the darkness. Escape the Ink Demon. Fear the Machine.
                    </p>
                </a>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                    <img
                        className="carousel-image"
                        src={persistence}
                        alt="Third slide"
                    />

                <Carousel.Caption className="carousel-caption">
                <a href = '/review' onClick = {() => {sessionStorage.setItem('gameID', '5fb3ed2a81e3145848abb7ce')}}>
                    <h3>The Persistence</h3>
                    <p>
                        A brutal take on the survival-horror genre that integrates rogue-like design elements to give the action an extra edge. Procedurally generated stages that change with each playthrough, creating a labyrinth-like experience that adds to the tension.
                    </p>
                </a>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                    <img
                        className="carousel-image"
                        src={residentEvil}
                        alt="Fourth slide"
                    />

                <Carousel.Caption className="carousel-caption">
                <a href = '/review' onClick = {() => {sessionStorage.setItem('gameID', '5fb3eddd81e3145848abb7cf')}}>
                    <h3>Resident Evil 2</h3>
                    <p>
                        The genre-defining masterpiece Resident Evil 2 returns, completely rebuilt from the ground up for a deeper narrative experience. Using Capcom’s proprietary RE Engine, Resident Evil 2 offers a fresh take on the classic survival horror saga with breathtakingly realistic visuals.
                    </p>
                </a>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                    <img
                        className="carousel-image"
                        src={evilWithin}
                        alt="Fifth slide"
                    />

                <Carousel.Caption className="carousel-caption">
                <a href = '/review' onClick = {() => {sessionStorage.setItem('gameID', '5fb3ee7a81e3145848abb7d0')}}>
                    <h3>The Evil Within 2</h3>
                    <p>
                        From mastermind Shinji Mikami, The Evil Within 2 is the latest evolution of survival horror. Detective Sebastian Castellanos has lost it all. But when given a chance to save his daughter, he must descend once more into the nightmarish world of STEM.
                    </p>
                </a>
                </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}

export default ControlledCarousel;