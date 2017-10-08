// Libs
import React from 'react';
import { connect } from 'react-redux';
// Definitions
import { todoListCollection } from '../../definitions';
// Components
import TodoList from '../todo-list';
// Style
import './styles/todo-list-collection.scss';

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
 * TodoListCollection comonent.
 * @param {object} props props.
 * @returns {JSXElement} component.
 */
const TodoListCollection = ({ todoListCollection }) => {
    return (
        <div className='todo-list--collection'>
            {todoListCollection.map((todoList) => (
                <TodoList key={todoList.id} {...todoList} />
            ))}
        </div>
    );
};

TodoListCollection.displayName = 'TodoListCollection';
TodoListCollection.propTypes = propTypes;

const TodoListCollectionConnected = connect(
    mapStateToProps,
    null
)(TodoListCollection);

export default TodoListCollectionConnected;
