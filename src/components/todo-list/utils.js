import { visibilityFilters } from '../../definitions/filter';

/**
 * Extract todos correponding to filter.
 * @param {array} todos todos.
 * @param {string} filter filter.
 * @returns {array} filtered todos.
 */
export const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case visibilityFilters.SHOW_ALL:
            return todos;
        case visibilityFilters.SHOW_COMPLETED:
            return todos.filter(t => t.completed);
        case visibilityFilters.SHOW_ACTIVE:
            return todos.filter(t => !t.completed);
        default:
            throw new Error(`Unknown visibility filter : ${filter}`);
    }
};
