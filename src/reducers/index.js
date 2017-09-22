import { combineReducers } from 'redux';
// Reducers
import visibilityFilter from './filter';
import todoListCollection from './todo-list-container';

const todoApp = combineReducers({
    visibilityFilter,
    todoListCollection
});

export default todoApp;
