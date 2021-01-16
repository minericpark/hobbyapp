import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import * as Firestore from './services/Firestore';

function App() {
  const [value, setValue] = useState('');
  const [value2, setValue2] = useState('');
  const [error, setError] = useState('');

  function onValueChange(event) {
    setValue(event.target.value);
  }

  function onValueChange2(event) {
    setValue2(event.target.value);
  }

  function onSubmit() {
      Firestore.createHobbyEntry(value).then(docRef => {
            console.log(docRef);
          })
          .catch(error => setError('create-hobby-error'));

      Firestore.addEmailToHobbyEntry(value2, value).then(docRef => {
            console.log(docRef);
          })
          .catch(error => setError('add-email-to-hobby-error'));

      Firestore.getHobbyEmails(value).then(collection => {
          console.log(collection);
          })
          .catch(error => setError('get-emails-error'));
  }

  console.log(value);
  console.log(value2);

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
      <div> Test </div>
      <form>
        <label htmlFor="value">Hobby</label>
        <label htmlFor="value2">email</label>
        <input type="text" value={value} onChange={e => onValueChange(e)}/>
        <input type="text" value={value2} onChange={e => onValueChange2(e)}/>
        <button type="button" onClick={onSubmit}>Submit</button>
      </form>
    </div>
  );
}

/** Initial commit - Minericpark */

export default App;
