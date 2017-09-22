import React from 'react';
import PropTypes from 'prop-types';
// Components
import Line from './line';
// Libs
import { connect } from 'react-redux';
// Actions
import { toggleTodo } from '../../actions/todo-list.js';

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
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired
        })
    ),
    onToggleTodo: PropTypes.func.isRequired
};

const defaultProps = {
    todos: []
};

const List = ({ todos, onToggleTodo }) => {
    return (
        <ul className='todo-list--list'>
            {todos.map(todo => (
                <li key={todo.id}>
                    <Line {...todo} onToggleTodo={onToggleTodo} />
                </li>
            ))}
        </ul>
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
