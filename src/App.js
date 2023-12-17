import './index.css';
import Circle from './components/Circle';

function App() {
  return (
    <div className="App">
      <Circle width="15vw" height="1vh" zIndex = {10} backgroundColor="rgba(0, 0, 255, 0.533)" animation = "rotateRight 2s linear infinite"/>
      <Circle width="25vw" height="20vh" zIndex = {9} backgroundColor="rgba(255, 0, 0, 0.533)" animation="rotateLeft 2s linear infinite"/>
      <Circle width="35vw" height="30vh" zIndex = {8} backgroundColor="rgba(172, 255, 47, 0.533)" animation = "rotateRight 2s linear infinite"/>
      <Circle width="45vw" height="40vh" zIndex = {7} backgroundColor="rgba(128, 0, 128, 0.533)" animation="rotateLeft 2s linear infinite"/>
      <Circle width="55vw" height="50vh" zIndex = {6} backgroundColor="rgba(255, 217, 0, 0.533)" animation = "rotateRight 1s linear infinite"/>
      <Circle width="65vw" height="60vh" zIndex = {5} backgroundColor="rgba(0, 0, 255, 0.533)" animation="rotateLeft 1s linear infinite"/>
      <Circle width="75vw" height="70vh" zIndex = {4} backgroundColor="rgba(255, 192, 203, 0.533)" animation = "rotateRight 1s linear infinite"/>
    </div>
  );
}

export default App;
