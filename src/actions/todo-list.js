// Libs
import uuid from 'uuid/v4';

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

/**
 * Add a new element.
 * @param {string} listId List identifier.
 * @param {string} text Text.
 * @returns {object} Action.
 */
export function addTodo(listId, text) {
    return {
        type: ADD_TODO,
        listId,
        id: uuid(),
        text
    };
}

/**
 * Toggle an element.
 * @param {string} listId List identifier.
 * @param {string} id Element identifier.
 * @returns {object} Action.
 */
export function toggleTodo(listId, id) {
    return {
        type: TOGGLE_TODO,
        listId,
        id
    };
}
