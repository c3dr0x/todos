import uuid from 'uuid/v4';

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export function addTodo(listId, text) {
    return {
        type: ADD_TODO,
        listId,
        id: uuid(),
        text,
    };
}

export function toggleTodo(listId, id) {
    return {
        type: TOGGLE_TODO,
        listId,
        id
    };
}
