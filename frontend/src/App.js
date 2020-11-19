import './App.css';

import Landing from "./components/landing/Landing";
import { BrowserRouter, Route } from 'react-router-dom';
import Signup from "./components/signup/Signup";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./components/homepage/HomePage";
// import GamesBanner from './components/gamesbanner/GamesBanner';



function App() {
  return (
    <div className="App">
      {/* <GamesBanner /> */}
      <div className="navbar">
        <Navbar />
      </div>
      <BrowserRouter>
        <Route exact path="/" component={Landing} />
        <Route exact path="/signup" component={Signup} />
      </BrowserRouter> */}
      <Homepage />
    </div>
  );
}
export default App;
