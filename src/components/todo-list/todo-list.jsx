// Libs
import React from 'react';
// Definitions
import { todoList } from '../../definitions';
// Components
import List from './list';
import Add from './add';
import TCard from 'react-toolbox/lib/card/Card';
import TCardTitle from 'react-toolbox/lib/card/CardTitle';
import TCardText from 'react-toolbox/lib/card/CardText';
// Style
import './todo-list.css';

const propTypes = todoList;

const defaultProps = {
    todos: []
};

/**
 * TodoListComponent.
 * @param {object} props props.
 * @returns {JSXElement} component.
 */
const TodoList = ({ id, name, todos }) => {
    return (
        <div className='todo-list' >
            <TCard style={{ width: '350px' }}>
                <TCardTitle
                    title={name}
                />
                <TCardText>
                    <Add listId={id} />
                    <List listId={id} todos={todos} />
                </TCardText>
                {/* <CardActions theme={theme}>
                    <Button label='Action 1' />
                    <Button label='Action 2' />
                </CardActions> */}
            </TCard>
        </div>
    );
};

TodoList.displayName = 'TodoList';
TodoList.propTypes = propTypes;
TodoList.defaultProps = defaultProps;

export default TodoList;
