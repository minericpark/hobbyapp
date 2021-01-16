import logo from './logo.svg';
import './App.css';
import Question from './Question';
import React, {useState} from 'react';

function App() {
  const [value1, setValue1] = useState('');
  function handleValue(value, assignedValue) {
      setValue1(value);
  }

  console.log(value1);

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
          test commit
        </a>
        <Question questionText={'2'} valueChange={handleValue}/>
        <h1> {value1} </h1>
      </header>
    </div>
  );
}

/** Initial commit - Minericpark */

export default App;
