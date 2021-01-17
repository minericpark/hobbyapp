import './App.css';
import './components/styles.css';
import React, { useState } from 'react'
import {Link, NavLink} from 'react-router-dom';

function Results(props) {
    const { newData } = props.location.state;

    return (
       <div className = "homepage">
           <h1 className="hobbyH1 display-1"> Your potential hobby is: {newData[3]} </h1>
          <h1> {newData[0].name } </h1>
          <h1> {newData[0].email} </h1>
          <h1> {newData[1].name } </h1>
          <h1> {newData[1].email} </h1>
          <h1> {newData[2].name } </h1>
          <h1> {newData[2].email} </h1>
           {/*<NavLink to="/questions"> Click to go to questions </NavLink>*/}
       </div>
    );
}
 
export default Results;