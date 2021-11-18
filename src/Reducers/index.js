import toDoReducer from './toDoReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  toDoReducer,
});
export default rootReducer;
