// Libs
import React from 'react';
import PropTypes from 'prop-types';
// Definitions
import { todo } from '../../definitions';

const propTypes = {
    ...todo,
    onToggleTodo: PropTypes.func.isRequired
};

const Line = ({ id, text, completed, onToggleTodo }) => {
    return (
        <div className='todo-list--line' data-todo-id={id}>
            <input type='checkbox' checked={completed} onChange={() => onToggleTodo(id)} />
            {text}
        </div>
    );
};

Line.displayName = 'Line';
Line.propTypes = propTypes;

export default Line;
