import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './components/App';

const user = {
  name: 'Bob',
  age: '23'
}

render(
  <App text="hello"/>,
  document.getElementById('app')
);
