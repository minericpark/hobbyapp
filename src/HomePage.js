import './App.css';
import React, { useState } from 'react'
import {Link, NavLink} from 'react-router-dom';


function Home() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleName = event => {
        setName(event.target.value);
    }

    const handleEmail = event => {
        setEmail(event.target.value);
    }

    return (
       <div className = "homepage">
          <h1>Home</h1>
           <label> Name: </label>
           <input type = "text" onChange={handleName}id = "name" placeholder = "Enter name here"></input>
           <label> Email Address: </label>
           <input type = "text" onChange={handleEmail}id = "email" placeholder = "Enter valid email address here"></input>
           {/*<NavLink to="/questions"> Click to go to questions </NavLink>*/}
           <Link to={{
               pathname: "/questions",
               state: {data: [name, email]}
           }}> Click to go to next page </Link>
       </div>
    );
}
 
export default Home;