import './App.css';
import React, {useState} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import QuestionsPage from './QuestionsPage.js';
import HomePage from './HomePage.js';
import './HobbySelect.js';


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path = "/" component = {HomePage} exact/>
          <Route path = "/questions" component = {QuestionsPage}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
