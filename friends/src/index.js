import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// Install react router
import { BrowserRouter as Router } from 'react-router-dom';


ReactDOM.render
    // Wrap app in router component
    (<Router>
        <App />
    </Router>
        , document.getElementById('root'));



