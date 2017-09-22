import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// Components
import TodoList from './todo-list';

const mapStateToProps = state => ({
    todoListCollection: state.todoListCollection
});

const propTypes = {
    todoList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            todos: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.string.isRequired,
                    text: PropTypes.string.isRequired,
                    completed: PropTypes.bool.isRequired
                })
            )
        })
    )
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
