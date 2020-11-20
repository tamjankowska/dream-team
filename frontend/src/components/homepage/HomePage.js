import React, { Component } from 'react';
import axios from 'axios';
import GamesCarousel from '../gamescarousel/GamesCarousel';
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
            <GamesCarousel />
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
