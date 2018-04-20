import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = { term: '' };

        // binds context of searchBar component state to onInputChange function
        // overwriting the local method with a new one bound to the context of SearchBar container
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    };

    onInputChange(event) {
        console.log(event.target.value);
        this.setState({ term: event.target.value });
    };

    onFormSubmit(event) {
        event.preventDefault();

        // api call
        this.props.fetchWeather(this.state.term);
        this.setState({ term: '' });
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

function mapDispatchToProps(dispatch) {
    // makes sure the action is "dispatched" throughout our application
    return bindActionCreators({fetchWeather}, dispatch);
};

// mapDispatchToProps goes in as second argument
// pass null in as an argument because we aren't concerned with state tracked by redux
export default connect(null, mapDispatchToProps)(SearchBar);