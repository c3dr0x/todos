// Libs
import { combineReducers } from 'redux';
// Reducers
import todoListCollection from './todo-list-collection';

const todoApp = combineReducers({
    todoListCollection
});

export default todoApp;
