
import React, {useEffect, useState} from 'react';

function Question(props) {
  const { questionText, valueChange } = props;
  const [value, setValue] = useState('');

  function onValueChange(event) {
      setValue(event.target.value);
      valueChange(event.target.value);
  }

  return (
    <div className = "main">
      <form>
        <h1> {props.question} </h1>
        <label for="s">{props.option1}</label>
        <input type="radio" name={props.name} id="option1" value={props.value1} onChange={e => onValueChange(e)}/>
        <label for="m">{props.option2}</label>
        <input type="radio" name={props.name} id="option2" value={props.value2} onChange = {e => onValueChange(e)}/>
        <label for="l">{props.option3}</label>
        <input type="radio" name={props.name} id="option3" value={props.value3} onChange = {e => onValueChange(e)}/>
        <label for="l">{props.option4}</label>
        <input type="radio" name={props.name} id="option4" value={props.value4} onChange = {e => onValueChange(e)}/>
      </form>
    </div>
  );
}

/*  <label for="value1">Value</label>
        <input type="radio" value={value} onChange={e => onValueChange(e)}/>*/

export default Question;