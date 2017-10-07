// Libs
import uuid from 'uuid/v4';

export const ADD_TODO_LIST = 'ADD_TODO_LIST';

/**
 * Add a todolist.
 * @param {string} name Name.
 * @returns {object} Action.
 */
export function addTodoList(name) {
    return {
        type: ADD_TODO_LIST,
        id: uuid(),
        name
    };
}
