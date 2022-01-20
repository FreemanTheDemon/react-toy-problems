import React, {Component} from 'react';

class Palindrome extends Component {
    constructor() {
        super();
        this.state = {
            userInput: '',
            palindrome: ''
        }
    }

    handleChange(e) {
        this.setState({userInput: e.target.value});
    }

    handleClick() {
        let reversed = '';
        for (let i = this.state.userInput.length - 1; i >= 0; i--) {
            reversed += this.state.userInput[i];
        }
        if (reversed === this.state.userInput) {
            this.setState({palindrome: this.state.userInput + ' is a palindrome!'});
        } else {
            this.setState({palindrome: this.state.userInput + ' is not a palindrome!'});
        }
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={this.handleChange.bind(this)}></input>
                <button className="confirmationButton" onClick={this.handleClick.bind(this)}>Is it a Palindrome?!</button>
                <span className="resultsBox">{this.state.palindrome}</span>
            </div>
        );
    }
}

export default Palindrome;