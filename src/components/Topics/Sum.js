import React, {Component} from 'react';

class Sum extends Component {
    constructor() {
        super();
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    handleClick() {
        this.setState({sum: this.state.number1 + this.state.number2});
    }

    render() {
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" onChange={(e) => {this.setState({number1: Number(e.target.value)})}}></input>
                <input className="inputLine" onChange={(e) => {this.setState({number2: Number(e.target.value)})}}></input>
                <button className="confirmationButton" onClick={this.handleClick.bind(this)}>Add Them!</button>
                <span className="resultsBox">{this.state.sum}</span>
            </div>
        );
    }
}

export default Sum;