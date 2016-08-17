import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
    //In array bc we are getting multiple cities coming back
    //similar to state.concat([action.payload.data]) es6
      return [action.payload.data, ...state];
  }
  return state;
}