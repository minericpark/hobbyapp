import './App.css';
import './components/styles.css';
import React, { useState } from 'react'
import {Link, NavLink} from 'react-router-dom';
import cooking from './hobbyImages/cooking.jpeg';
import dancing from './hobbyImages/dancing.jpg';
import golf from './hobbyImages/golf.jpg';
import photography from './hobbyImages/photography.jpg';
import piano from './hobbyImages/piano.jpg';
import programming from './hobbyImages/programming.jpg';
import reading from './hobbyImages/reading.jpg';
import yoga from './hobbyImages/yoga.jpg';

function Results(props) {
    const { newData } = props.location.state;
    function determineImage() {
        if(newData[3] === "Piano")
            return piano;
        else if(newData[3] === "Cooking")
            return cooking;
        else if(newData[3] === "Programming")
            return programming;
        else if(newData[3] === "Golf")
            return golf;
        else if(newData[3] === "Dancing")
            return dancing;
        else if(newData[3] === "Photography")
            return photography;
        else if(newData[3] === "Reading")
            return reading;
        else 
            return yoga;
    }

    return (
       <div className = "homepage">
          <h1 className="hobbyH1 display-1"> Your potential hobby is: {newData[3]} </h1>
          <img className= "hobbyImage" src = {determineImage()} alt={newData[3]}></img>
          <h1 className="hobbyH1 display-1"> Recommended users to contact with: </h1>
          <h2 className= "hobbyH1 display-1"> {newData[0].name} </h2>
          <h2 className = "hobbyH1 display-1"> <a href = {"mailto:" + newData[0].email}> {newData[0].email} </a> </h2>
          <h2 className = "hobbyH1 display-1"> {newData[1].name } </h2>
          <h2 className = "hobbyH1 display-1"> <a href = {"mailto:" + newData[1].email}> {newData[1].email} </a> </h2>
          <h2 className = "hobbyH1 display-1"> {newData[2].name} </h2>
          <h2 className = "hobbyH1 display-1"> <a href = {"mailto:" + newData[2].email}> {newData[2].email} </a> </h2>
           
           {/*<NavLink to="/questions"> Click to go to questions </NavLink>*/}
       </div>
    );
}
 
export default Results;