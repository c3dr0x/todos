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
// Misc
import { getVisibleTodos } from './utils';

/**
 * mapStateToProps.
 * @param {object} state state.
 * @param {object} props props.
 * @returns {object} props.
 */
const mapStateToProps = (state, { todos, visibilityFilter }) => ({
    todos: getVisibleTodos(todos, visibilityFilter)
});

/**
 * mapDispatchToProps.
 * @param {func} dispatch dispatch.
 * @param {object} props props.
 * @returns {object} props.
 */
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
