// Libs
import React from 'react';
import ReactDOM from 'react-dom';
// App
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import './index.css';
import App from './app';
// Misc
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

registerServiceWorker();
