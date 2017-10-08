// Libs
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk'
import { ThemeProvider } from 'react-css-themr';
import theme from './theme/theme';
import './theme/theme.css';
// Reducers
import todoApp from './reducers'
// Components
import App from './components/app';
// Styles
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'roboto-fontface/css/roboto/roboto-fontface.css';
// Misc
import { loadState, saveState } from './utils/local-storage';

const VERSION = '0.1.0';

const { version, ...persistedState } = loadState() || {};
const loggerMiddleware = createLogger();

if (version !== undefined && version !== VERSION) {
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
    saveState({ ...store.getState(), version: VERSION });
});

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </Provider>
    , document.getElementsByClassName('root')[0]
);
