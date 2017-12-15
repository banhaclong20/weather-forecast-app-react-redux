import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeatherDetail, weatherCityImage } from '../actions/index';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import styled from 'styled-components';

class WeatherDetail extends Component { 
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const cityId = this.props.params.cityId;
    this.props.fetchWeatherDetail(cityId);
  }

  render() {
    const city = this.props.weatherDetail.name;
    const { main, weather, wind } = this.props.weatherDetail;
    const cityImg = this.props.weatherCityImage.results[0].urls.small;
    
    const style = {
      background: 'url(' + cityImg + ') no-repeat center',
      backgroundSize: 'cover',
      padding: '3em 0'
    }
    
    if (!city) {
      return <div>Loading...</div>
    }

    return (
      <div className="detail-weather-widget">
        <div>
          <div style={style} className="col-xs-12">
            <h2>{ city }</h2>
            <div>
              <i className={ "detail-icon wi wi-owm-" + weather[0].id }></i>
            </div>
            <h1>{ main.temp.toFixed(1) } °F</h1>
          </div>
        </div>
        <div className="row footer-content">
          <div className="col-xs-12 status-weather">
              <h4>{ weather[0].description }</h4>
            </div>  
          <div className="col-xs-6">
            <p>Wind Speed: { wind.speed } m/s </p>
          </div>
          <div className="col-xs-6">
            <p>Humidity: { main.humidity } % </p>
          </div>
          <div className="col-xs-6">
            <p>Min Temp: { main.temp_min } °F </p>
          </div>
          <div className="col-xs-6">
            <p>Max Temp: { main.temp_max } °F </p>
          </div>
        </div>
        <Link to={`/`} className="button-back"><i className="fa fa-long-arrow-left" aria-hidden="true"></i> Go back</Link>
      </div>
    )
  }
}

function mapStateToProps({ weatherDetail, weatherCityImage }) {
  return { weatherDetail, weatherCityImage };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeatherDetail, weatherCityImage }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherDetail);