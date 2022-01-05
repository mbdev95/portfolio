import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.scss';
import './scss/App.scss';
import App from './components/App.js';
import {Provider} from './components/context';


ReactDOM.render(
    <Provider>
        <BrowserRouter>
            <Routes>
                <Route path='*' element={<App />} />
            </Routes>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

