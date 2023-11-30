import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

// Be sure to replace this reducer! 🙂
const pizzaMenu = (state = [], action) => {
  if (action.type === 'SET_PIZZA') {
    return action.payload
}
  return state;
}

const addPizzaToCart = (state = [], action) => {
  if (action.type === 'ADD_PIZZA_TO_CART') {
    return [...state, action.payload]
}
  return state;
}


const store = createStore(
  combineReducers({
    pizzaMenu,
    addPizzaToCart
  }),
  applyMiddleware(logger),
);


export default store;
