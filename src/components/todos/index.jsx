import React from 'react';
// Components
import TodoList from '../../containers/visible-todos';
import AddTodo from '../../containers/add-todo';
import TodoFooter from './footer';

const TodoComponent = () => {
    return (
        <div className='todo'>
            <AddTodo />
            <TodoList />
            <TodoFooter />
        </div>
    );
}

TodoComponent.displayName = 'TodoComponent';

export default TodoComponent;
