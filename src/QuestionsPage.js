import './App.css';
import * as Firestore from './services/Firestore';
import Question from './components/Question';
import React, {useState} from 'react';
import * as HobbySelect from './HobbySelect';
import cooking from './hobbyImages/cooking.jpeg';
import dancing from './hobbyImages/dancing.jpg';
import golf from './hobbyImages/golf.jpg';
import photography from './hobbyImages/photography.jpg';
import piano from './hobbyImages/piano.jpg';
import programming from './hobbyImages/programming.jpg';
import reading from './hobbyImages/reading.jpg';
import yoga from './hobbyImages/yoga.jpg';

function QuestionsPage(props) {
    const { data } = props.location.state;

    const [value1, setValue1] = useState([]);
    const [value2, setValue2] = useState([]);
    const [value3, setValue3] = useState([]);
    const [value4, setValue4] = useState([]);
    const [value5, setValue5] = useState([]);
    const [value6, setValue6] = useState([]);
    const [value7, setValue7] = useState([]);
    const [value8, setValue8] = useState([]);
    const [value9, setValue9] = useState([]);
    const [value10, setValue10] = useState([]);
    const [hobby, setHobby] = useState('');
    const [displayResult, setResult] = useState(false);

    function getHobby() {
        //b="1,2,3,4".split`,`.map(x=>+x)
        let answerArray = [value1, value2, value3, value4, value5, value6, value7, value8, value9, value10];
        let newAnswerArray = [];
        for(var i = 0; i < answerArray.length; i++) {
            newAnswerArray.push(answerArray[i].split`,`.map(x=>+x));
        } 
        setHobby(HobbySelect.HobbyAlgo(newAnswerArray));
    }
    
    function handleValue(value, assignedValue) {
    setValue1(value);
    }

    function handleValue2(value, assignedValue) {
    setValue2(value);
    }

    function handleValue3(value, assignedValue) {
    setValue3(value);
    }

    function handleValue4(value, assignedValue) {
    setValue4(value);
    }

    function handleValue5(value, assignedValue) {
    setValue5(value);
    }

    function handleValue6(value, assignedValue) {
    setValue6(value);
    }

    function handleValue7(value, assignedValue) {
    setValue7(value);
    }

    function handleValue8(value, assignedValue) {
    setValue8(value);
    }

    function handleValue9(value, assignedValue) {
    setValue9(value);
    }

    function handleValue10(value, assignedValue) {
    setValue10(value);
    }

    function checkIfNull() {
        var valueLength = 3;
        if(value1.length < valueLength || value2.length < valueLength || value3.length < valueLength || value4.length < valueLength || value5.length < valueLength)
            return true;
        else if(value6 < valueLength || value7 < valueLength || value8 < valueLength || value9.length < valueLength || value10.length < valueLength) 
            return true;
        else 
            return false;
    }

    function determineImage() {
        if(hobby === "Piano")
            return piano;
        else if(hobby === "Cooking")
            return cooking;
        else if(hobby === "Programming")
            return programming;
        else if(hobby === "Golf")
            return golf;
        else if(hobby === "Dancing")
            return dancing;
        else if(hobby === "Photography")
            return photography;
        else if(hobby === "Reading")
            return reading;
        else 
            return yoga;
    }

    return (
        <div className = "questions">
            <h1> {data[0]} </h1>
            <h1> {data[1]} </h1>
                <Question 
                    questionText={'1'} 
                    valueChange={handleValue}
                    name = "math"
                    question = "Do you enjoy using math to solve problems?"
                    option1 = "Strongly Agree"
                    option2 = "Somewhat Agree"
                    option3 = "Somewhat Disagree"
                    option4 = "Strongly Disagree"
                    value1 = {[5,4,0]}
                    value2 = {[4,3,0]}
                    value3 = {[2,2,0]}
                    value4 = {[0,1,2]}
                />
                <Question 
                    questionText={'2'} 
                    valueChange={handleValue2}
                    name = "leader"
                    question = "Do you prefer being the leader/in charge?"
                    option1 = "Strongly Agree"
                    option2 = "Somewhat Agree"
                    option3 = "Somewhat Disagree"
                    option4 = "Strongly Disagree"
                    value1 = {[3,0,5]}
                    value2 = {[3,2,2]}
                    value3 = {[3,3,3]}
                    value4 = {[3,5,0]}
                />
                <Question 
                    questionText={'3'} 
                    valueChange={handleValue3}
                    name = "independence"
                    question = "Do you prefer working independently or in a team?"
                    option1 = "I always prefer working independently"
                    option2 = "Most of the time I prefer working independently"
                    option3 = "Most of the time I prefer working collaboratively"
                    option4 = "I always prefer working collaboratively"
                    value1 = {[5,5,0]}
                    value2 = {[2,3,0]}
                    value3 = {[2,0,3]}
                    value4 = {[3,0,5]}
                />
                <Question 
                    questionText={'4'} 
                    valueChange={handleValue4}
                    name = "sports"
                    question = "Out of all of these sports, which would be your favourite?"
                    option1 = "Soccer"
                    option2 = "Basketball"
                    option3 = "Football"
                    option4 = "None of the above"
                    value1 = {[1,2,5]}
                    value2 = {[3,0,5]}
                    value3 = {[0,1,3]}
                    value4 = {[2,2,2]}
                />
                <Question 
                    questionText={'5'} 
                    valueChange={handleValue5}
                    name = "food"
                    question = "Which of the following foods do you prefer?"
                    option1 = "Pizza"
                    option2 = "Tacos"
                    option3 = "Curry"
                    option4 = "Sushi"
                    value1 = {[5,3,4]}
                    value2 = {[1,1,5]}
                    value3 = {[5,5,0]}
                    value4 = {[5,5,5]}
                />
                <Question 
                    questionText={'6'} 
                    valueChange={handleValue6}
                    name = "study"
                    question = "How do you prefer to study?"
                    option1 = "Study alone"
                    option2 = "Make/join a study group"
                    option3 = "I don't study"
                    option4 = "Grind everything the night before"
                    value1 = {[4,5,0]}
                    value2 = {[5,0,5]}
                    value3 = {[0,0,0]}
                    value4 = {[3,3,2]}
                />
                <Question 
                    questionText={'7'} 
                    valueChange={handleValue7}
                    name = "sleep"
                    question = "What is your sleeping schedule like? (Choose the closest schedule)"
                    option1 = "12AM - 9AM"
                    option2 = "3AM - 10AM"
                    option3 = "10PM - 8AM"
                    option4 = "Rarely sleep"
                    value1 = {[4,3,2.5]}
                    value2 = {[5,5,2.5]}
                    value3 = {[5,5,0]}
                    value4 = {[5,5,5]}
                />
                <Question 
                    questionText={'8'} 
                    valueChange={handleValue8}
                    name = "language"
                    question = "What is your favourite programming language?"
                    option1 = "Python"
                    option2 = "Java"
                    option3 = "Assembly"
                    option4 = "English"
                    value1 = {[2,3,5]}
                    value2 = {[4,5,1]}
                    value3 = {[3,0,5]}
                    value4 = {[5,0,5]}
                />
                <Question 
                    questionText={'9'} 
                    valueChange={handleValue9}
                    name = "music"
                    question = "What is your favourite genre of music (choose the one the applies the most)?"
                    option1 = "Hip-hop"
                    option2 = "R&B"
                    option3 = "Classical"
                    option4 = "EDM"
                    value1 = {[2.5,1,5]}
                    value2 = {[3,2,4]}
                    value3 = {[5,4,1]}
                    value4 = {[5,5,5]}
                />
                <Question 
                    questionText={'10'} 
                    valueChange={handleValue10}
                    name = "season"
                    question = "What's your favourite season?"
                    option1 = "Spring"
                    option2 = "Summer"
                    option3 = "Fall"
                    option4 = "Winter"
                    value1 = {[2.5,2.5,5]}
                    value2 = {[2.5,2,5]}
                    value3 = {[3,5,2]}
                    value4 = {[4,5,1]}
                />
            <button onClick = {getHobby} disabled = {checkIfNull()}> Get Results </button>
            <h1> Your potential hobby is: {hobby} </h1>
            <img className = "hobbyImage" src = {determineImage()} alt = {hobby}></img>
        </div>
    );
}
 
export default QuestionsPage;