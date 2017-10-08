// Libs
import React from 'react';
// Definitions
import { todoList } from '../../definitions';
// Actions
import { VisibilityFilters } from '../../actions/filter'
// Components
import List from './list';
import Add from './add';
import Footer from './footer';
import TCard from 'react-toolbox/lib/card/Card';
import TCardTitle from 'react-toolbox/lib/card/CardTitle';
import TCardText from 'react-toolbox/lib/card/CardText';
// Styles
import './styles/todo-list.scss';
// Misc
import { getVisibleTodos } from './utils';

const propTypes = todoList;

const defaultProps = {
    todos: []
};

/**
 * TodoListComponent.
 * @param {object} props props.
 * @returns {JSXElement} component.
 */
const TodoList = ({ id, name, todos, visibilityFilter }) => {
    const completedTodos = getVisibleTodos(todos, VisibilityFilters.SHOW_COMPLETED).length;
    const allTodos = getVisibleTodos(todos, VisibilityFilters.SHOW_ALL).length;

    return (
        <div className='todo-list' >
            <TCard style={{ width: '350px' }}>
                <TCardTitle
                    title={name}
                    subtitle={`(${completedTodos}/${allTodos})`}
                />
                <TCardText>
                    <Add listId={id} />
                    <List listId={id} todos={todos} visibilityFilter={visibilityFilter} />
                </TCardText>
                <Footer listId={id} visibilityFilter={visibilityFilter} />
            </TCard>
        </div>
    );
};

TodoList.displayName = 'TodoList';
TodoList.propTypes = propTypes;
TodoList.defaultProps = defaultProps;

export default TodoList;
