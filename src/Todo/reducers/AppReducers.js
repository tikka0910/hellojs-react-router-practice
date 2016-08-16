import { combineReducers } from 'redux';
import { todos } from 'Todo/reducers/TodoReducers';

const AppReducers = combineReducers({
  todos
})

export default AppReducers;
