import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './scss/App.scss';
import App from './components/App.js';
import {Provider} from './components/context';


ReactDOM.render(
    <React.StrictMode>
        <Provider>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

