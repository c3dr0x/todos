export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const LOAD_TODO_LIST = 'LOAD_TODO_LIST';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';

export function addTodo(text) {
    return {
        type: ADD_TODO,
        text
    };
}

export function removeTodo(id) {
    return {
        type: REMOVE_TODO,
        id
    };
}

export function loadTodoList() {
    return {
        type: LOAD_TODO_LIST
    };
}

export function toggleTodo(id) {
    return {
        type: TOGGLE_TODO,
        id
    };
}

export function updateTodo(id, text, completed) {
    return {
        type: UPDATE_TODO,
        text,
        completed
    };
}
