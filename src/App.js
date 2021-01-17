import logo from './logo.svg';
import './App.css';
import * as Firestore from './services/Firestore';
import Question from './components/Question';
import React, {useState} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import QuestionsPage from './QuestionsPage.js';
import HomePage from './HomePage.js';
import './HobbySelect.js';
import ResultsPage from './ResultsPage.js';


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path = "/" component = {HomePage} exact/>
          <Route path = "/questions" component = {QuestionsPage}/>         
          <Route path = "/results" component = {ResultsPage}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
