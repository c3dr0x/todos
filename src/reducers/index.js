// Libs
import { combineReducers } from 'redux';
// Reducers
import todoListCollection from './todo-list-collection';
import snackbar from './snackbar';

const todoApp = combineReducers({
    todoListCollection,
    snackbar
});

export default todoApp;
