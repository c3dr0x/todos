// Libs
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk'
import { ThemeProvider } from 'react-css-themr';
import theme from './theme/theme';
import './theme/theme.css';
// Misc
import { loadState, saveState } from './utils/local-storage';
import logo from './logo.svg';
import './App.css';
// Reducers
import todoApp from './reducers'
// Components
import TodoListContainer from './components/todo-list/todo-list-container';
import Footer from './components/footer';

const persistedState = loadState();
const loggerMiddleware = createLogger();

let store = createStore(
    todoApp,
    persistedState,
    applyMiddleware(
        loggerMiddleware,
        thunkMiddleware
    )
);

store.subscribe(() => {
    saveState(store.getState());
});

/**
 * Application root.
 * @returns {JSXElement} component.
 */
const App = () => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <div className='App'>
                    <div className='App-header'>
                        <img src={logo} className='App-logo' alt='logo' />
                        <h2>{'Welcome to React'}</h2>
                    </div>
                    <TodoListContainer />
                    <Footer />
                </div>
            </ThemeProvider>
        </Provider>
    );
};

export default App;
