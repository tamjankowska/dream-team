import './App.css';
import React, {useState, useEffect} from 'react';
import Landing from "./components/landing/Landing";
import { BrowserRouter, Route } from 'react-router-dom';
import Signup from "./components/signup/Signup";
import Navbar from "./components/navbar/Navbar";
import HomePage from './components/homepage/HomePage';
import Logout from './components/logout/Logout';
import Review from './components/review/review';

import Profile from "./components/profile/Profile"

import FAQ from './components/faq/Faq';


function App() {

  const [tabName] = useState("Clueless Reviews");

  useEffect(()=> {
    document.title = tabName;
  })

  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>
      <BrowserRouter>
        <Route exact path="/" component={Landing} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path='/logout' component={Logout} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/FAQ" component={FAQ} />
        <Route exact path="/review" component={Review} />
      </BrowserRouter> 
    </div>
  );
}
export default App;