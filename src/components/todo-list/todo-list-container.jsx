// Libs
import React from 'react';
import { connect } from 'react-redux';
// Definitions
import { todoListCollection } from '../../definitions';
// Components
import TodoList from './todo-list';

const mapStateToProps = state => ({
    todoListCollection: state.todoListCollection
});

const propTypes = {
    todoListCollection: todoListCollection.isRequired
};

const TodoListContainer = ({ todoListCollection }) => {
    return (
        <div className='todo-list--container'>
            {todoListCollection.map((todoList) => (
                <TodoList key={todoList.id} {...todoList} />
            ))}
        </div>
    );
};

TodoListContainer.displayName = 'TodoListContainer';
TodoListContainer.propTypes = propTypes;

const TodoListContainerConnected = connect(
    mapStateToProps,
    null
)(TodoListContainer);

export default TodoListContainerConnected;
