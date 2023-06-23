import "./App.css";
import "./styles.css";
import { Game } from "./Game";
import { Title } from "./Game";
function App() {
  return (
    <div className="App">
      <div className="container">
        <Title />
        <Game />
      </div>
    </div>
  );
}

export default App;

/* 
export default function Square() {
  return <button className="square">X</button>;
} */
