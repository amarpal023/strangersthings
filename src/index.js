import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// import './bootstrap.min.css';
import { App } from './components';


ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.querySelector('#app')
);
