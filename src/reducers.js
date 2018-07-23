import { combineReducers } from 'redux';
import { homeReducer } from './Home/reducers';

const rootReducer = combineReducers({
  homeReducer: homeReducer
});

export default rootReducer;
