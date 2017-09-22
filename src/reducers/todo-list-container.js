import { ADD_TODO_CONTAINER } from '../actions/todo-list-container';
import { ADD_TODO, TOGGLE_TODO } from '../actions/todo-list';

import todoListReducer from './todo-list'

const defaultState = [
    {
        id: '6fdf6ffc-ed77-94fa-407e-a7b86ed9e59d',
        name: '1st List',
        todos: []
    }
];

function todos(state = defaultState, action) {
    switch (action.type) {
        case ADD_TODO_CONTAINER:
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    todos: []
                }
            ];
        case ADD_TODO:
        case TOGGLE_TODO:
            return state.map(todoList => {
                if (todoList.id !== action.listId) {
                    return todoList;
                }

                return {
                    ...todoList,
                    todos: todoListReducer(todoList.todos, action)
                };
            })
        default:
            return state;
    }
}

export default todos;