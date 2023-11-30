import axios from 'axios';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

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
  
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
  
    </div>
  );
}

export default App;
