import React from 'react';
import classes from './Calculator.module.css';

const calculator = (props) => (
  <div>
    <form className={classes.Form} onSubmit={() => props.handleSubmit}>
        <span>
            <label htmlFor="desiredValue">Desired Value: </label>
            <input id="desiredValue" name="desiredValue" type="text"></input>
            <label htmlFor="givenValue">Given Value: </label>
            <input id="givenValue" name="desiredValue" type="text"></input>
        </span>
        <br></br>
        <input id="interest" name="interest" type="number"></input>
        <br></br>
        <input id="years" name="years" type="number"></input>
        <br></br>
        <input id="amount" name="amount" type="number"></input>
        <br></br>
        <input value="Submit" type="submit" />
        
    </form>
    <label>Result: {props.result}</label>
    <label>Factor: {props.factor}</label>
  </div>
);
export default calculator;