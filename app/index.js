import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';

render(
  <App text="hello"/>,
  document.getElementById('app')
);
