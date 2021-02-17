import React from 'react';
import ReactDOM from 'react-dom';
//imports
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
//Components
import App from './App';


function reducer(){
  return {
    user: {
      name: 'Dustin'
    },
    movies: [
      'Star Wars',
      'Lord of the Rings',
      'Harry Potter'
    ],
    todoList: [
      { task: 'Learn Redux', id: 0, completed: false }
    ],
    moviesToWatch: 13
  }
}
const store = createStore(reducer);


ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

