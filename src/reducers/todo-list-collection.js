import { updateItemInArray, updateObject } from './utils';
// Actions
import { ADD_TODO_LIST } from '../actions/todo-list-collection';
import { ADD_TODO, TOGGLE_TODO } from '../actions/todo-list';
import { SET_VISIBILITY_FILTER } from '../actions/filter';
// Reducers
import todosReducer from './todos';
import visibilityFilterReducer from './filter';

import uuid from 'uuid/v4';

const defaultState = [{
    id: uuid(),
    name: '1st List',
    visibilityFilter: 'SHOW_ALL',
    todos: [{
        id: uuid(),
        text: 'toto',
        completed: false
    }, {
        id: uuid(),
        text: 'lala',
        completed: true
    }]
}, {
    id: uuid(),
    name: '2nd List',
    visibilityFilter: 'SHOW_ACTIVE',
    todos: [{
        id: uuid(),
        text: 'toto',
        completed: false
    }, {
        id: uuid(),
        text: 'lala',
        completed: true
    }]
}];

/**
 * Todos list reducer.
 * @param {array} state state.
 * @param {object} action action.
 * @returns {array} state.
 */
function todoListCollectionReducer(state = defaultState, action) {
    switch (action.type) {
        case ADD_TODO_LIST:
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    todos: todosReducer(undefined, {}),
                    visibilityFilter: visibilityFilterReducer(undefined, {})
                }
            ];
        case SET_VISIBILITY_FILTER:
            return updateItemInArray(state, action.listId, todoList => {
                return updateObject(todoList, { visibilityFilter: visibilityFilterReducer(todoList.visibilityFilter, action) });
            })
        case ADD_TODO:
        case TOGGLE_TODO:
            return updateItemInArray(state, action.listId, todoList => {
                return updateObject(todoList, { todos: todosReducer(todoList.todos, action) });
            });
        default:
            return state;
    }
}

export default todoListCollectionReducer;