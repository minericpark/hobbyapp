import './App.css';
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import hobbyhub from './hobbyhub.png';



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


        <div className="container">
            
            <img className= "logo" src={hobbyhub} alt="hobbyhub logo"/>

            <div className="main_body">
                <div className="intro" ><h2 className="display-5">
                   
            </h2> </div>
                <div>
                    <label className="home_label" ><p className="lead"> Name:</p> </label>
                    <input type="text" onChange={handleName} id="name" placeholder="Enter name here"></input>

                </div>


                <div>
                    <label className="home_label"><p className="lead"> Email Address:</p>  </label>
                    <input type="text" onChange={handleEmail} id="email" placeholder="Enter valid email address here"></input>
                </div>


                
            </div>

            <div className="next_page">
                    {/*<NavLink to="/questions"> Click to go to questions </NavLink>*/}
                    <Link to={{
                        pathname: "/questions",
                        state: { data: [name, email] }
                    }}> <p className="lead"> Find My Hobby!</p></Link>

                </div>
        </div>
    );
}

export default Home;