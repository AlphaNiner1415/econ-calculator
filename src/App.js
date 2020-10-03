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
        var posInterest = Math.pow(1+interest,year);
        var negInterest = Math.pow(1+interest,-1*year);
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
        var posInterest = Math.pow(1+interest,year);
        var negInterest = Math.pow(1+interest,-1*year);
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
        return returnValue*factor;
    }
    handleSubmit(event){
        event.preventDefault();
        
        const form = event.target;
        const data = new FormData(form);
        const [desiredSymbol, givenSymbol, interest, year, amount] = [data.get("desiredSymbol"), data.get("givenSymbol"), data.get("interest"), data.get("year"), data.get("amount")];
        console.log(data.get("desiredSymbol"));
        const result1 = this.calc(desiredSymbol,givenSymbol, interest, year, amount);
        const factor1 = this.getFactor(desiredSymbol, givenSymbol, interest, year);
        console.log(result1);
        this.setState(() => {
            return {
                result: result1,
                factor: factor1
            }
        });
        
    }
    render(){
        return (
          <div>
            <form className={classes.Form} onSubmit={this.handleSubmit}>
              <span>
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
              <input id="interest" name="interest" type="number" step="0.01" min="0"></input>
              <br></br>
              <input id="years" name="years" type="number" min="0"></input>
              <br></br>
              <input id="amount" name="amount" type="number" min="0"></input>
              <br></br>
              <input value="Submit" type="submit" />
            </form>
            <label>Result: {this.state.result}</label>
            <label>Factor: {this.state.factor}</label>
          </div>
        );
    };
}
export default App;