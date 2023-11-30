import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

// Be sure to replace this reducer! 🙂
const pizzaMenu = (state = [], action) => {
  if (action.type === 'SET_PIZZA') {
    return action.payload
}
  return state;
}

const cart = (state = [], action) => {
  if (action.type === 'ADD_PIZZA_TO_CART') {
    return [...state, action.payload]
}
if (action.type === 'REMOVE_PIZZA_FROM_CART') {
  return state.filter((pizza) => {
    return pizza.id != action.payload.id
  })
}
  return state;
}




const store = createStore(
  combineReducers({
    pizzaMenu,
    cart,
    
  }),
  applyMiddleware(logger),
);


export default store;
