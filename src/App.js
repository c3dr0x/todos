// Libs
import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
// Misc
import logo from './logo.svg';
import './App.css';
// Reducers
import todoApp from './reducers'
// Components
import TodoComponent from './components/todos';

const todos = [
    { id: 0, text: 'start front', completed: true },
    { id: 1, text: 'do backend', completed: false },
    { id: 2, text: 'do CSS', completed: false },
    { id: 3, text: 'publish', completed: false }
];

const logger = store => next => action => {
    console.group(action.type);
    console.info('dispatching', action);
    const result = next(action);
    console.log('next state', store.getState());
    console.groupEnd(action.type);

    return result;
}

let store = createStore(todoApp, { todos }, applyMiddleware(logger));

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <div className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h2>Welcome to React</h2>
                    </div>
                    <TodoComponent />
                </div>
            </Provider>
        );
    }
}

export default App;
