import React, {Component} from 'react';

class EvenAndOdd extends Component {
    constructor() {
        super();
        this.state = {
            evenArray: [],
            oddArray : [],
            userInput : ''
        }
    }

    handleInput(e) {
        this.setState({userInput: e.target.value});
    }

    handleClick() {
        let arrOfNums = this.state.userInput.split(',');
        let evens = [];
        let odds = [];
        for (let i = 0; i < arrOfNums.length; i++) {
            let currentNum = Number(arrOfNums[i]);
            if (currentNum % 2 === 0) {
                evens.push(currentNum);
            } else {
                odds.push(currentNum);
            }
        }
        this.setState({evenArray: evens, oddArray: odds});
    }

    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine" onChange={this.handleInput.bind(this)}></input>
                <button className="confirmationButton" onClick={this.handleClick.bind(this)}>Sort the Numbers!</button>
                <span className="resultsBox">Evens: {this.state.evenArray.join(', ')}</span>
                <span className="resultsBox">Odds: {this.state.oddArray.join(', ')}</span>
            </div>
        );
    }
}

export default EvenAndOdd;