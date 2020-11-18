import './App.css';
import Landing from "./components/landing/Landing";
import { BrowserRouter, Route } from 'react-router-dom';
import Signup from "./components/signup/Signup";
import Navbar from "./components/navbar/Navbar";
// import Homepage from "./components/homepage/HomePage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Route exact path="/" component={Landing} />
        <Route exact path="/signup" component={Signup} />
      </BrowserRouter>
      {/* <Homepage /> */}
    </div>
  );
}
export default App;
