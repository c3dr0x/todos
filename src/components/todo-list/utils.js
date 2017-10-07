import { VisibilityFilters } from '../../actions/filter'

/**
 * Extract todos correponding to filter.
 * @param {array} todos todos.
 * @param {string} filter filter.
 * @returns {array} filtered todos.
 */
export const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(t => t.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(t => !t.completed);
        default:
            throw new Error(`Unknown visibility filter : ${filter}`);
    }
};
