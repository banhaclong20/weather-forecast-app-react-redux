import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';

import SearchBar from './searchbar';
import { fetchImage } from '../actions/index'

class WeatherList extends Component {

  renderWeather(cityData) {
    const city = cityData.name;
    const id = cityData.id;
    const temp = cityData.main.temp;
    const status = cityData.weather[0].description;
    const country = cityData.sys.country;
    const iconId = cityData.weather[0].id;

    var bgColorClass = 'list-weather-widget '
      if (temp >= 75) {
          bgColorClass += 'hot';
      }
      else if (temp > 65 && temp < 75) {
          bgColorClass += 'warm';
      }
      else if (temp > 50 && temp < 65) {
          bgColorClass += 'normal';
      }
      else if (temp > 25 && temp < 50) {
          bgColorClass += 'cold';
      }
      else if (temp <= 25) {
          bgColorClass += 'very-cold';
    }

    return (
      <Link to={`/${ id }`}
        key={ id }
        className="list-link">
        <div className={ bgColorClass + " row" }>
          <div className="col-xs-12 col-sm-6">
            <h2>{ temp.toFixed(1) } °F </h2>
            <h5>{ city }, {country}</h5>
            <span className="status">{status}</span>
          </div>
          <div className="list-icon col-xs-12 col-sm-6">
            <i className={ " wi wi-owm-" + iconId }></i>
          </div>
        </div>
      </Link>
    )
  }

  render() {
    return (
      <div>
        <SearchBar />
        <div className="table">
          { this.props.weather.map(this.renderWeather) }
        </div>
      </div>
    )
  }
}

function mapStateToProps({ weather }) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);
