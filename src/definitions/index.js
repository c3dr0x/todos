// Libs
import PropTypes from 'prop-types';

export const todo = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
};

export const todoList = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    visibilityFilter: PropTypes.string.isRequired,
    todos: PropTypes.arrayOf(
        PropTypes.shape(
            todo
        )
    )
};

export const todoListCollection = PropTypes.arrayOf(
    PropTypes.shape(
        todoList
    )
);