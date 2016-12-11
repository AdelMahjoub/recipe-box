import jquery from 'jquery';
window.$ = window.jQuery = jquery;
require('bootstrap/dist/js/bootstrap.js');
require('bootstrap/dist/css/bootstrap.min.css');
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
