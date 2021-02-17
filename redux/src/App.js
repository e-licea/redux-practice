import React from 'react'

//reducers 
import { moviesReducer } from './reducers/moviesReducer';
//imports
import { createStore } from 'redux'


const store = createStore(moviesReducer);
console.log(store);

export default function App() {
  return (
    <div>
        This is from inside the Application
    </div>
  )
}
