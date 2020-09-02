import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const storeInstance = createStore();
ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
    </Provider>,
     document.getElementById('root')
);


//what does the pizza need?
//size STRING
//topping STRING
/*
[
  {
size: String
}
]
*/