import React from 'react';
import PropTypes from 'prop-types';
// Components
import List from './list';
import Add from './add';

const propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired
        })
    )
};

const defaultProps = {
    todos: []
};

const TodoList = ({ id, name, todos }) => {
    return (
        <div className='todo-list'>
            <div className='todo-list--header'>
                {name}
            </div>
            <Add listId={id} />
            <List listId={id} todos={todos} />
        </div>
    );
};

TodoList.displayName = 'TodoList';
TodoList.propTypes = propTypes;
TodoList.defaultProps = defaultProps;

export default TodoList;
