import './App.css';

import Landing from "./components/landing/Landing";
import { BrowserRouter, Route } from 'react-router-dom';
import Signup from "./components/signup/Signup";
import Navbar from "./components/navbar/Navbar";
import HomePage from './components/homepage/HomePage';





function App() {
  return (
    <div className="App">
      {/* <Signup /> */}
      <Navbar />
      <BrowserRouter>
        <Route exact path="/" component={Landing} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/home" component={HomePage} />
      </BrowserRouter> 
    </div>
  );
}
export default App;
