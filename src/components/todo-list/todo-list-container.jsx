// Libs
import React from 'react';
import { connect } from 'react-redux';
// Definitions
import { todoListCollection } from '../../definitions';
// Components
import TodoList from './todo-list';

/**
 * mapStateToProps.
 * @param {object} state state.
 * @returns {object} props.
 */
const mapStateToProps = state => ({
    todoListCollection: state.todoListCollection
});

const propTypes = {
    todoListCollection: todoListCollection.isRequired
};

/**
 * TodoListContainer comonent.
 * @param {object} props props.
 * @returns {JSXElement} component.
 */
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
