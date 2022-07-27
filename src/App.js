import './App.css';
import Keyboard from './components/Keyboard';
import Board from './components/Board';
import { createContext } from "react";


export const Appcontext = createContext();

function App() {
  const [board , setBoard] = useState(boardDefaults);
  return (
    <div className="App">
     <nav>
      <h1>Worlde</h1>
     </nav>
     <Appcontext.Provider value= {{board, setBoard}}>
     <Board />
     <Keyboard />
    </Appcontext.Provider>
    </div>
  );
}

export default App;
