import React from 'react';
import PropTypes from 'prop-types';
// Components
import TodoLine from './line';

const TodoList = ({ todos, onToggleTodo }) => {
    return (
        <ul className='todo--list'>
            {todos.map(todo => (
                <li key={todo.id}>
                    <TodoLine {...todo} onToggleTodo={onToggleTodo} />
                </li>
            ))}
        </ul>
    );
}

TodoList.displayName = 'TodoList';
TodoList.propTypes = {
    todos: PropTypes.array,
    onToggleTodo: PropTypes.func.isRequired
};
TodoList.defaultProps = {
    todos: []
};

export default TodoList;
