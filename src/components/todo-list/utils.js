
/**
 * Extract todos correponding to filter.
 * @param {array} todos todos.
 * @param {string} filter filter.
 * @returns {array} filtered todos.
 */
export const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed);
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed);
        default:
            throw new Error(`Unknown visibility filter : ${filter}`);
    }
};
