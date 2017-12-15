import { FETCH_WEATHER_IMAGE } from '../actions/index';

export default function(state = {}, action ) {
  switch (action.type) {
    case FETCH_WEATHER_IMAGE:
      return action.payload.data
      console.log(action.payload.data);
    }
  return state
}
