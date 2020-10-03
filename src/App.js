import React, { Component } from 'react';
import classes from './App.module.css';
import Calculator from './components/Calculator/Calculator';
class App extends Component {
    
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    };
    state = {
        result: 0,
        factor: 0
    }
    getFactor = (desiredSymbol, givenSymbol, interest, year) =>{
        var factor = 0.0;
        var posInterest = Math.pow(parseFloat(1.0)+parseFloat(interest),year);
        var negInterest = 1/posInterest;
        if(desiredSymbol === "P"){
            switch (givenSymbol) {
                case "F":
                    factor = negInterest;
                    break;
                case "A":
                    factor = (posInterest-1)/(interest*posInterest);
                    break;
                case "G":
                    factor = (1.0/interest)*(((posInterest-1)/interest*posInterest) - year/posInterest);
                    break;
                default:
                    factor = 1;
                    break;
            }
        } else if(desiredSymbol === "F"){
            switch(givenSymbol) {
                case "P":
                    factor = posInterest;
                    break;
                case "A":
                    factor = (posInterest-1)/interest;
                    break;
                default:
                    factor = 1;
                    break;
            }
        } else if(desiredSymbol === "A"){
            switch(givenSymbol) {
                case "P":
                    factor = (interest*posInterest)/(posInterest-1);
                    break;
                case "F":
                    factor = interest/(posInterest-1);
                    break;
                default:
                    factor = 1;
                    break;
            }
        }
        return factor;
    }

    calc = (desiredSymbol, givenSymbol, interest, year, amount) => {
        var returnValue = amount;
        var factor = 0.0;
        
        var posInterest = Math.pow(parseFloat(1.0)+parseFloat(interest),year);
        console.log(parseFloat(1.0) + parseFloat(interest));
        var negInterest = 1/posInterest;
        console.log(negInterest);
        if(desiredSymbol === "P"){
            switch (givenSymbol) {
                case "F":
                    factor = negInterest;
                    break;
                case "A":
                    factor = (posInterest-1)/(interest*posInterest);
                    break;
                case "G":
                    factor = (1.0/interest)*(((posInterest-1)/interest*posInterest) - year/posInterest);
                    break;
                default:
                    factor = 1;
                    break;
            }
        } else if(desiredSymbol === "F"){
            switch(givenSymbol) {
                case "P":
                    factor = posInterest;
                    break;
                case "A":
                    factor = (posInterest-1)/interest;
                    break;
                default:
                    factor = 1;
                    break;
            }
        } else if(desiredSymbol === "A"){
            switch(givenSymbol) {
                case "P":
                    factor = (interest*posInterest)/(posInterest-1);
                    break;
                case "F":
                    factor = interest/(posInterest-1);
                    break;
                default:
                    factor = 1;
                    break;
            }
        }
        console.log(factor);
        return returnValue*factor;
    }
    handleSubmit(event){
        event.preventDefault();
        
        const form = event.target;
        const data = new FormData(form);
        const [desiredSymbol, givenSymbol, interest, year, amount] = [data.get("desiredSymbol").toUpperCase(), data.get("givenSymbol").toUpperCase(), data.get("interest"), data.get("years"), data.get("amount")];
        console.log(desiredSymbol);
        console.log(givenSymbol);
        
        const result1 = this.calc(desiredSymbol,givenSymbol, interest, year, amount);
        const factor1 = this.getFactor(desiredSymbol, givenSymbol, interest, year);
        
        this.setState(() => {
            return {
                result: result1,
                factor: factor1
            }
        });
        
    }
    render(){
        return (
            <div className={classes.App}>
                <h1>Cash Flow Calculator</h1>
                <form className={classes.Form} onSubmit={this.handleSubmit}>
                <span className={classes.Span}>
                    <label htmlFor="desiredSymbol">Desired Symbol: </label>
                    <input
                    id="desiredSymbol"
                    name="desiredSymbol"
                    type="text"
                    ></input>
                    <label htmlFor="givenSymbol">Given Symbol: </label>
                    <input id="givenSymbol" name="givenSymbol" type="text"></input>
                </span>
                <br></br>
                <label htmlFor="interest">Interest: </label>
                <input
                    id="interest"
                    name="interest"
                    type="number"
                    step="0.01"
                    min="0"
                ></input>
                <br></br>
                <label htmlFor="years">Years: </label>
                <input id="years" name="years" type="number" min="0"></input>
                <br></br>
                <label htmlFor="amount">Amount: </label>
                <input id="amount" name="amount" type="number" min="0"></input>
                <br></br>
                <input value="Submit" type="submit" />
                </form>
                <label className={classes.AnsLabel}>
                Result: {this.state.result}
                </label>
                <label className={classes.AnsLabel}>
                Factor: {this.state.factor}
                </label>
            </div>
        );
    };
}
export default App;