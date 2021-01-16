import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import * as Firestore from './services/Firestore';
import Question from './Question';

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
        /**
         * Create object email here
         */
        let nonregUser = {
            email: value2,
        }

        Firestore.createHobbyEntry(value);

        Firestore.addEmailToHobbyEntry(nonregUser, value);

        nonregUser.location = 'Canada';

        Firestore.addLocationToHobbyEmail(nonregUser, value);

        Firestore.getHobbyEmails(value).then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                console.log("Got collection item: " + doc.id + " with location: " + doc.data().location);
            });
        });
    }

    console.log(value);
    console.log(value2);

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

export default App;
