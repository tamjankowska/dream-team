import './App.css';

import Landing from "./components/landing/Landing";
import { BrowserRouter, Route } from 'react-router-dom';
import Signup from "./components/signup/Signup";
// import GamesBanner from './components/gamesbanner/GamesBanner';
import GamesCarousel from './components/gamesbanner/GamesCarousel';
import Navbar from "./components/navbar/Navbar";
import HomePage from './components/homepage/HomePage';





function App() {
  return (
    <div className="App">
      <GamesCarousel />
      <Signup />
      <div className="navbar">
        <Navbar />
      </div>
      <BrowserRouter>
        <Route exact path="/" component={Landing} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/home" component={HomePage} />
      </BrowserRouter> 
    </div>
  );
}
export default App;