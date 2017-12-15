import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';
import WeatherDetailReducer from './reducer_weather_detail';
import WeatherImage from './reducer.image';

const rootReducer = combineReducers({
  weather: WeatherReducer,
  weatherDetail: WeatherDetailReducer,
  weatherCityImage: WeatherImage,
})

export default rootReducer;
