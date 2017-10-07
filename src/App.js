// Libs
import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk'
import { ThemeProvider } from 'react-css-themr';
import theme from './theme/theme';
import './theme/theme.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import { loadState, saveState } from './utils/local-storage';
// Reducers
import todoApp from './reducers'
// Components
import TodoListContainer from './components/todo-list/todo-list-container';
import TAppBar from 'react-toolbox/lib/app_bar/AppBar';

const persistedState = loadState();
const loggerMiddleware = createLogger();

if (persistedState !== undefined && persistedState.version !== '0.1.0') {
    throw new Error('Update local cache or delete it, then hit refresh.');
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    todoApp,
    persistedState,
    composeEnhancers(
        applyMiddleware(
            loggerMiddleware,
            thunkMiddleware
        )
    )
);

store.subscribe(() => {
    saveState({ ...store.getState(), version: '0.1.0' });
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
                    <TAppBar title='ToDo.app' />
                    <TodoListContainer />
                </div>
            </ThemeProvider>
        </Provider>
    );
};

export default App;
