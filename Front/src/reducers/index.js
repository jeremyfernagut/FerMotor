import { combineReducers } from 'redux';
import counter from './counter';
import dataHome from '../data/dataHome';

export default combineReducers({
  counter,
  dataHome,
});
