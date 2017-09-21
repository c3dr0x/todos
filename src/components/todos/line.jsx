import React from 'react';
import PropTypes from 'prop-types';

const TodoLine = ({ id, text, completed, onToggleTodo }) => {
    return (
        <div className='todo--line' data-todo-id={id}>
            <input type='checkbox' checked={completed} onChange={() => onToggleTodo(id)} />
            {text}
        </div>
    );
}

TodoLine.displayName = 'TodoLine';
TodoLine.propTypes = {
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool,
    onToggleTodo: PropTypes.func.isRequired
};
TodoLine.defaultProps = {
    completed: false
};

export default TodoLine;
