import './App.css';

import Landing from "./components/landing/Landing";
import { BrowserRouter, Route } from 'react-router-dom';
import Signup from "./components/signup/Signup";
import Navbar from "./components/navbar/Navbar";
import HomePage from './components/homepage/HomePage';
import Profile from "./components/profile/Profile"

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>
      <BrowserRouter>
        <Route exact path="/" component={Landing} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/profile" component={Profile} />
      </BrowserRouter> 
    </div>
  );
}
export default App;