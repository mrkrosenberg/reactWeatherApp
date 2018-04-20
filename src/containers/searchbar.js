import React, { Component } from 'react';



export default class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = { term: '' };

        // binds context of searchBar component state to onInputChange function
        // overwriting the local method with a new one bound to the context of SearchBar container
        this.onInputChange = this.onInputChange.bind(this);
    };

    onInputChange(event) {
        console.log(event.target.value);
        this.setState({ term: event.target.value });
    };

    onFormSubmit(event) {
        event.preventDefault();

        // we need an api call to fetch weather data
    };

    render() {
        return (
            <form 
                onSubmit={this.onFormSubmit}
                className="input-group">
                <input 
                    placeholder="Get a five-day forecast in your favorite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                    type="text"/>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    };
};