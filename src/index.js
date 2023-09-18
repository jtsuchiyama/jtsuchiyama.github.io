import React from 'react';
import { HashRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import App from './components/App/App.js';

ReactDOM.render(
    <React.StrictMode>
        <HashRouter>
            <App />
        </HashRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
