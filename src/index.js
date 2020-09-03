import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
//string
const typeReducer = (state = 'delivery', action)=> {
if(action.type === "SET_ORDER_TYPE"){
return action.payload;
}
return state;
}

//Object
const customerReducer = ()=> {};

//array
const pizzaReducer = ()=> {};

const storeInstance = createStore(
  combineReducers({
typeReducer,
  }
  ));
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
size: STRING
topping: STRING
}
]
*/