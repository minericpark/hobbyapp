import logo from './logo.svg';
import './App.css';
import Question from './components/Question';
import React, {useState} from 'react';

function App() {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');
  const [value5, setValue5] = useState('');
  const [value6, setValue6] = useState('');
  const [value7, setValue7] = useState('');
  const [value8, setValue8] = useState('');
  const [value9, setValue9] = useState('');
  const [value10, setValue10] = useState('');

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

  console.log(checkIfNull());
  return (
    <div className="App">
      <div className = "questions">
        <form action="" method = "get">
          <Question 
            questionText={'1'} 
            valueChange={handleValue}
            name = "math"
            question = "Do you enjoy using math to solve problems?"
            option1 = "Strongly Agree"
            option2 = "Somewhat Agree"
            option3 = "Somewhat Disagree"
            option4 = "Strongly Disagree"
            value1 = {[5,4,2.5]}
            value2 = {[4,3,2.5]}
            value3 = {[2,2,2.5]}
            value4 = {[0,1,2.5]}
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
            value1 = {[3,5,4]}
            value2 = {[3,4,4]}
            value3 = {[3,2,5]}
            value4 = {[3,0,5]}
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
            value1 = {[2.5,5,0]}
            value2 = {[2.5,3,0]}
            value3 = {[2.5,0,3]}
            value4 = {[2.5,0,5]}
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
            value1 = {[2.5,2,5]}
            value2 = {[3,4,5]}
            value3 = {[2.5,5,5]}
            value4 = {[2.5,4,0]}
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
            value2 = {[2.5,1,5]}
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
            name = "food"
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
            name = "food"
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
            name = "winter"
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
          <input type="submit" value="Submit" disabled = {checkIfNull()}/>
          </form>
        </div>
    </div>
  );
}

/** Initial commit - Minericpark */

export default App;
