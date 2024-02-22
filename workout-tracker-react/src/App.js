import logo from './logo.svg';
import './App.css';
import { ListGroup, Greeting} from "./components/Content";
import * as DateFunctions from "./components/dateFunctions"
import * as Forms from "./components/Form"
import LogSession from './components/Home';
import { useRef } from 'react';


function App() {

  const dialogRef = useRef(null);
  const dialogRef2 = useRef(null);
  const dialogRef3 = useRef(null);

  function toggleDialog() {
    if (!dialogRef.current) {
      return;
    }
    dialogRef.current.hasAttribute("open")
      ? dialogRef.current.close()
      : dialogRef.current.showModal();
  }

  // below, set up a counter for every new set of repetitions by exercise.
  function countSets() {
    let counter = 0;
    // while adialogsRefs keep appearing for the same exercise performed, or
    // while the user keeps on clicking the button with id="next" instead of id="next-exercise"
    if (dialogRef2.current) {
      counter += 1;
      return(counter);
    };
  }
  function nextButton() {
    
  }
  return (
    <div className="App">
      <LogSession /><p>
      <Greeting /><ListGroup /><Forms.LogTrainigSession /></p>
      <h2>Expiry: {DateFunctions.addDays(new Date(), 145).toLocaleDateString()}</h2>
      <h3>Course will end aprox. by: {DateFunctions.addMonths(new Date(), 5).toLocaleDateString()} </h3>
      <Forms.LogTrainigSession />

      <div>
        <button onClick={toggleDialog}>log workout session</button>
        <dialog ref={dialogRef}>log workout
          <form method="dialog">
            <label for="exercise-name">exercise performed:</label>
            <input type="text" name="exercise-name" id="exercise-name"></input>
            <div className="buttons-organizer">
              <button id="clear" type="reset">clear</button>
              <button onClick={() => dialogRef2.current.showModal()} id="next" type="submit">
                next
              </button>
            </div>
          </form>
        </dialog>

        <dialog ref={dialogRef2}>
          <form method="dialog">
            <h3>set #{countSets()}</h3>
            <label for="exercise-reps">repetitions:</label>
            <input type="number" name="exercise-reps" id="exercise-reps"></input>
            <div className="buttons-organizer">
              <button onClick={() => dialogRef2.current.close()} id="close">
                close
              </button>
              <button onClick={() => dialogRef2.current.showModal()} id="next" type="reset">
                next set
              </button>
              <button onClick={() => dialogRef.current.showModal()} id="next-exercise">
                exercise finished, go to next
              </button>
            </div>
          </form>
        </dialog>

        <dialog ref={dialogRef3}>

        </dialog>

      </div>
    </div>
  );
}

export default App;




/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
