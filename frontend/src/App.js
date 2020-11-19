import './App.css';

import Landing from "./components/landing/Landing";
import { BrowserRouter, Route } from 'react-router-dom';
import Signup from "./components/signup/Signup";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./components/homepage/HomePage";
import Profile from "./components/profile/Profile"
// import GamesBanner from './components/gamesbanner/GamesBanner';

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>
      {/* <BrowserRouter>
        <Route exact path="/" component={Landing} />
        <Route exact path="/signup" component={Signup} />
      </BrowserRouter>
      <Homepage />
      <br></br> */}
      <Profile />
    </div>
  );
}
export default App;