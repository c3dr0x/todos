import { combineReducers } from 'redux'
// Reducers
import visibilityFilter from './filter';
import todos from './todos';

const todoApp = combineReducers({
    visibilityFilter,
    todos
});

export default todoApp;