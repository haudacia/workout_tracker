import logo from './logo.svg';
import './App.css';
import { ListGroup, Greeting} from "./components/Content";
import * as DateFunctions from "./components/dateFunctions"
import { LogTrainigSession } from './components/Form';

function App() {
  return (
    <div className="App">
      <p><Greeting /><ListGroup /><LogTrainigSession /></p>
      <h2>Expiry: {DateFunctions.addDays(new Date(), 145).toLocaleDateString()}</h2>
      <h3>Course will end aprox. by: {DateFunctions.addMonths(new Date(), 5).toLocaleDateString()} </h3>
      <LogTrainigSession />
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
