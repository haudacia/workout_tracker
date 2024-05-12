import { useState } from 'react';
import './App.css';
import { ListGroup, Greeting} from "./components/Content";
import * as DateFunctions from "./components/dateFunctions"
import * as Forms from "./components/Form"
import LogSession from './components/Home';
import { useRef } from 'react';









function App() {

  function MyForm() {
    function handleSubmit(e) {
      // Prevent the browser from reloading the page
      e.preventDefault();
  
      // Read the form data
      const form = e.target;
      const formData = new FormData(form);
  
      // You can pass formData as a fetch body directly:
      fetch('/some-api', { method: form.method, body: formData });
  
      // Or you can work with it as a plain object:
      const formJson = Object.fromEntries(formData.entries());
      console.log(formJson);
    }
  
    return (
      <form method="post" onSubmit={handleSubmit}>
        <label>
          Text input: <input name="myInput" defaultValue="Some initial value" />
        </label>
        <hr />
        <label>
          Checkbox: <input type="checkbox" name="myCheckbox" defaultChecked={true} />
        </label>
        <hr />
        <p>
          Radio buttons:
          <label><input type="radio" name="myRadio" value="option1" /> Option 1</label>
          <label><input type="radio" name="myRadio" value="option2" defaultChecked={true} /> Option 2</label>
          <label><input type="radio" name="myRadio" value="option3" /> Option 3</label>
        </p>
        <hr />
        <button type="reset">Reset form</button>
        <button type="submit">Submit form</button>
      </form>
    );
  };

  var count = 1;
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
  // with this synthax, the counterworked!
  function handleLogNextSet() {
    return (
      dialogRef2.current.showModal(),
      alert(count),
      count++
    )};

    function handleLogSet() {
      return (
        dialogRef2.current.showModal()
      )};
  
  // below, set up a counter for every new set of repetitions by exercise.
  // How to use a same button to trigger 1-increment count and 2-open next dialog to input new data?
  function Counter() {
    const [count, setCount] = useState(1);

    function incrementCount() {
      setCount(count + 1);
    }

    return (
      <div>
        <p>Set #{count}</p>
        <button onClick={incrementCount}>add 1</button>
      </div>
    );
  }

  return (
    <div className="App">
      <LogSession />
      <p><Greeting /><ListGroup /><Forms.LogTrainigSession /></p>
      <h2>Expiry: {DateFunctions.addDays(new Date(), 145).toLocaleDateString()}</h2>
      <h3>Course will end aprox. by: {DateFunctions.addMonths(new Date(), 5).toLocaleDateString()} </h3>
      <Forms.LogTrainigSession />

      <div>
        <button onClick={toggleDialog}>log workout session</button>
        <dialog ref={dialogRef}>log workout
          <form method="dialog">
            <label for="exercise-name">exercise performed:</label>
            <input type="text" name="exercise-name" id="exercise-name"/>
            <div className="buttons-organizer">
              <button id="clear" type="reset">clear</button>
              <button 
                onClick={handleLogSet} id="log-set" type="submit">
                log set
              </button>
              <button onClick={() => dialogRef2.current.close()} id="finish" type='submit'>
                close
              </button>
            </div>
          </form>
        </dialog>

        <dialog ref={dialogRef2}>
          <form method="dialog">
            <label for="exercise-reps">repetitions:</label>
            <input type="number" name="exercise-reps" id="exercise-reps"/>

            <label for="weightload">weightload</label>
            <input type="number" name="exercise-weights" id="weightload"/>kg

            <div className="buttons-organizer">
              <button onClick={() => dialogRef2.current.close()} id="close">
                close
              </button>
              <button 
                onClick={handleLogNextSet} id="next" type="submit">
                next set
              </button>
              <button onClick={() => dialogRef.current.showModal()} id="next-exercise" type='submit'>
                exercise finished, go to next
              </button>
            </div>
            <Counter />

          </form>
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
