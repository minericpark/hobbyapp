
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
      <div> {questionText} </div>
      <form>
        <label for="s">Small</label>
        <input type="radio" name="size" id="s" value={[2,3,5]} onChange={e => onValueChange(e)}/>
        <label for="m">Medium</label>
        <input type="radio" name="size" id="m" value={[4,5,3]} onChange = {e => onValueChange(e)}/>
        <label for="l">Large</label>
        <input type="radio" name="size" id="l" value={[5,5,5]} onChange = {e => onValueChange(e)}/>
      </form>
    </div>
  );
}

/*  <label for="value1">Value</label>
        <input type="radio" value={value} onChange={e => onValueChange(e)}/>*/

export default Question;