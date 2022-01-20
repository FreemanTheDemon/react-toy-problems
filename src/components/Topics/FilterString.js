import React, {Component} from 'react';

class FilterString extends Component {
    constructor() {
        super();
        this.state = {
            unFilteredArray: ['hello world', 'hello john', 'where are you john', 'paul knows a centaur and john', 'centaurs are interesting'],
            userInput: '',
            filteredArray: []
        }
    }

    handleChange(e) {
        this.setState({userInput: e.target.value});
    }

    handleClick() {
        let filtered = [];
        for (let i = 0; i < this.state.unFilteredArray.length; i++) {
            if (this.state.unFilteredArray[i].includes(this.state.userInput)) {
                filtered.push(this.state.unFilteredArray[i]);
            }
        }
        this.setState({filteredArray: filtered});
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">{this.state.unFilteredArray.join(', ')}</span>
                <input className="inputLine" onChange={this.handleChange.bind(this)}></input>
                <button className="confirmationButton" onClick={this.handleClick.bind(this)}>Filter by Text Content!</button>
                <span className="resultsBox filterStringRB">{this.state.filteredArray.join(', ')}</span>
            </div>
        );
    }
}

export default FilterString;