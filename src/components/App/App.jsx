import axios from 'axios';
import './App.css';
import React, { useState, useEffect } from 'react';
import PizzaList from '../PizzaList/PizzaList';
import { useSelector, useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('in useEffect');
    getPizzaList();
  }, []);

  const getPizzaList = () => {
    axios({
      method: 'GET',
      url: '/api/pizza'
    })
      .then((response) => {
        const pizzaArray = response.data

        dispatch({
          type: 'SET_PIZZA',
          payload: pizzaArray
        })
      })
      .catch((error) => {
        console.log('error on GET', error);
      });
    }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>

      <PizzaList />
  
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
  
    </div>
  );
}

export default App;
