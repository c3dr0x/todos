// Libs
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// Actions
import { toggleTodo } from '../../actions/todo-list.js';
// Definitions
import { todo } from '../../definitions';
// Components
import TList from 'react-toolbox/lib/list/List';
import Line from './line';

/**
 * Extract todos correponding to filter.
 * @param {array} todos todos.
 * @param {string} filter filter.
 * @returns {array} filtered todos.
 */
const getVisibleTodos = (todos, filter) => {
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

const mapStateToProps = (state, { todos }) => ({
    todos: getVisibleTodos(todos, state.visibilityFilter)
});

const mapDispatchToProps = (dispatch, { listId }) => ({
    onToggleTodo: todoId => {
        dispatch(toggleTodo(listId, todoId));
    }
});

const propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape(
            todo
        )
    ),
    onToggleTodo: PropTypes.func.isRequired
};

const defaultProps = {
    todos: []
};

/**
 * ListComponent.
 * @param {object} props props.
 * @returns {JSXElement} comonent.
 */
const List = ({ todos, onToggleTodo }) => {
    return (
        <TList selectable ripple>
            {todos.map(todo => (
                <Line key={todo.id} {...todo} onToggleTodo={onToggleTodo} />
            ))}
        </TList>
    );
}

List.displayName = 'List';
List.propTypes = propTypes;
List.defaultProps = defaultProps;

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(List);

export default VisibleTodoList;
