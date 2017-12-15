import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather, fetchImage } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(e) {
    this.setState({ term: e.target.value });
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.props.fetchImage(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <form
        onSubmit={ this.onFormSubmit }>
        <div className="heading">
            <h3>Search the current weather</h3>
            <span>Build by React/Redux</span>
        </div>
        <input
          placeholder="Search city name, like Chicago"
          className="search-input"
          value={ this.state.term }
          onChange={ this.onInputChange }
        />
        <span className="search-btn">
          <input type="submit" hidden />
        </span>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather, fetchImage }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
