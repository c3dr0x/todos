import uuid from 'uuid/v4';

export const ADD_TODO_CONTAINER = 'ADD_TODO_CONTAINER';

export function addTodoContainer(name) {
    return {
        type: ADD_TODO_CONTAINER,
        id: uuid(),
        name,
    };
}
