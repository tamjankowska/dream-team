import './App.css';
import Signup from "./components/signup/Signup";
// import GamesBanner from './components/gamesbanner/GamesBanner';
import GamesCarousel from './components/gamesbanner/GamesCarousel';

function App() {
  return (
    <div className="App">
      {/* <GamesBanner /> */}
      <GamesCarousel />
      <Signup />
    </div>
  );
}
export default App;