// Libs
import React from 'react';
// Definitions
import { todoList } from '../../definitions';
// Components
import List from './list';
import Add from './add';

const propTypes = todoList;

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
