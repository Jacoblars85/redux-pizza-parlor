import axios from 'axios';
import './App.css';
import React, { useState, useEffect } from 'react';
import PizzaList from '../PizzaList/PizzaList';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import CustomerInfo from '../CustomerInfo/CustomerInfo';
import Checkout from '../Checkout/Checkout';

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
      <Router>

        <header className='App-header'>
          <h1 className='App-title'>JJJJ's Pizza</h1>
        </header>

        <p>Pizza is great.</p>

        <Route exact path="/">
          <PizzaList />

          <Link to="/customInfo">
            <button>Next</button>
          </Link>

        </Route>


        <Route exact path="/customInfo">
          <CustomerInfo />
        </Route>

        <Route exact path="/checkout">
        <Checkout />
        </Route>
        
      </Router>
    </div>
  );
}

export default App;
