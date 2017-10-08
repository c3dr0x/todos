// Libs
import React from 'react';
import './styles/app.scss';
// Components
import AppBar from './app-bar';
import TodoListCollection from './todo-list-collection';

/**
 * Application root.
 * @returns {JSXElement} component.
 */
const App = () => {
    return (
        <div className='app'>
            <AppBar />
            <TodoListCollection />
        </div>
    );
};

export default App;
