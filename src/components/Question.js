
import React, { useEffect, useState } from 'react';
import './styles.css';

function Question(props) {
  const { questionText, valueChange } = props;
  const [value, setValue] = useState('');

  function onValueChange(event) {
    setValue(event.target.value);
    valueChange(event.target.value);
  }

  return (
    <div className="container text-centre">
  

      <h1 className="display-1"> {props.question} </h1>
     <p className="lead">
       <div>

       <input id={props.name+"a"} type="radio" className= "radio-btn" name={props.name}  value={props.value1} onChange={e => onValueChange(e)}/>
        <label className="question_label" for={props.name+"a"}>{props.option1}</label>
   

        <input id={props.name+"b"} type="radio" name={props.name}  value={props.value2} onChange = {e => onValueChange(e)}/>
        <label className="question_label" for={props.name+"b"} >{props.option2}</label>
    

        <input id={props.name+"c"} type="radio" name={props.name}  value={props.value3} onChange = {e => onValueChange(e)}/>
        <label className="question_label" for={props.name+"c"}>{props.option3}</label>
       

        <input id={props.name+"d"} type="radio" name={props.name}  value={props.value4} onChange = {e => onValueChange(e)}/>
        <label className="question_label" for={props.name+"d"}>{props.option4}</label>

    </div>


        </p>
        {/* <h1 className="display-1"> {props.question} </h1> 
         <label className="btn btn-secondary" for="option1">{props.option1}</label>
        <input type="radio" className="btn-check"  name={props.name} id="option1"  value={props.value1} onChange={e => onValueChange(e)}  />
        
        <label className="btn btn-secondary" for="option2">{props.option2}</label>
        <input type="radio" className="btn-check"  name={props.name} id="option2" value={props.value2} onChange={e => onValueChange(e)}  />
      

        <label className="btn btn-secondary" for="option3">{props.option3}</label>
        <input type="radio" className="btn-check"  name={props.name} id="option3" value={props.value3} onChange={e => onValueChange(e)}  />
        

        <label className="btn btn-secondary" for="option4">{props.option4}</label>
        <input type="radio" className="btn-check"  name={props.name} id="option4" value={props.value4} onChange={e => onValueChange(e)}  /> */}
        
    </div>
  );
}

/*  <label for="value1">Value</label>
        <input type="radio" value={value} onChange={e => onValueChange(e)}/>*/

export default Question;