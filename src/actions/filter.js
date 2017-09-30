export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

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
