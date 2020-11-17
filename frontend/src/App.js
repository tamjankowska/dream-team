import './App.css';
import Signup from "./components/signup/Signup";
import GamesBanner from './components/gamesbanner/GamesBanner';

function App() {
  return (
    <div className="App">
      <GamesBanner />
      <Signup />
    </div>
  );
}
export default App;
