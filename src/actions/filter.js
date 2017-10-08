
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

/**
 * Change filter option.
 * @param {string} listId todoList identifier.
 * @param {string} filter filter name.
 * @returns {object} action.
 */
export function setVisibilityFilter(listId, filter) {
    return {
        type: SET_VISIBILITY_FILTER,
        listId,
        filter
    };
}
