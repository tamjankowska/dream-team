import React, { Component } from 'react';
import axios from 'axios';
import GamesBanner from '../gamesbanner/GamesBanner';
import spiderman from '../images/spiderman.jpg';
import demonsSouls from '../images/demonsSouls.jpg';
import fifa21 from '../images/fifa21.jpg';
import codBlackOps from '../images/codBlackOps.jpg';
import acValhalla from '../images/acValhalla.jpeg';
import sackboy from '../images/sackboy.jpg';
import godfall from '../images/godfall.jpg';
import shadowlands from '../images/shadowlands.jpg';
import catQuestII from '../images/catQuestII.png';
import darkPictures from '../images/darkPictures.jpg';
import bendy from '../images/bendy.jpg';
import persistence from '../images/persistence.jpg';
import residentEvil from '../images/residentEvil.jpg';
import evilWithin from '../images/evilWithin.jpg';
import tonyHawk from '../images/tonyHawk.jpg';
import ufc4 from '../images/ufc4.jpg';
import nbank21 from '../images/nbank21.jpeg';
import marioSonic from '../images/marioSonic.jpg';
import animalCrossing from '../images/animalCrossing.jpg';
import hogwartsLegacy from '../images/hogwartsLegacy.jpg';
import finalFantasy7 from '../images/finalFantasy7.jpeg';
import zelda from '../images/zelda.png';
import doomEternal from '../images/doomEternal.jpeg';
import gears5 from '../images/gears5.jpeg';
import borderlands from '../images/borderlands.jpg';
import elderScrolls from '../images/elderScrolls.jpg';
import guildWars2 from '../images/guildWars2.jpg';
import bladeSoul from '../images/bladeSoul.jpg';

class HomePage extends Component {
    constructor() {
        super();
        this.state = {
            gameData: [],
            buttonClicked: false
        };
        this.getDetails = this.getDetails.bind(this);
    }
componentDidMount() {
    axios.get('http://localhost:5000/games')
    .then((res) => {
      console.log(res.data)
        this.setState({
            gameData: res.data
        });
    });
}
getDetails() {
    if (!this.state.buttonClicked) {
      this.setState({
        buttonClicked: true
      });
    }
  }
    render() {
        return (
          <div>
            <GamesBanner />
            <button onClick={this.getDetails}>Click</button>

            {this.state.buttonClicked ? this.state.gameData.map((data) => {
                  return (
                    <React.Fragment>
                      <p>
                        {" "}
                        <b>title</b> : {data.title}
                      </p>
                      <p>
                        <b>category</b> : {data.category}
                      </p>
                      <hr />
                    </React.Fragment>
                  );
                })
              : null}
          </div>
        );
    }
}

export default HomePage;