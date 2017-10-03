// Libs
import React from 'react';
import ReactDOM from 'react-dom';
// App
import './index.css';
import App from './App';
// Misc
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

registerServiceWorker();
