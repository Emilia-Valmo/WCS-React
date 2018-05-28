import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from "react-router-dom"; //obligatoire pour utiliser le router React


ReactDOM.render(<BrowserRouter>
    <App />
</BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
