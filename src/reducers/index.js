// Libs
import { combineReducers } from 'redux';
// Reducers
import todoListCollection from './todo-list-container';

const todoApp = combineReducers({
    todoListCollection
});

export default todoApp;
