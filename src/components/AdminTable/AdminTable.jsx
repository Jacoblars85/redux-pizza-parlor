import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'

function AdminTable() {
    const dispatch = useDispatch()

    const orders = useSelector((store) => store.orders)

    useEffect(() => {
      console.log('in useEffect');
      getOrders();
    }, []);
  
    const getOrders = () => {
      axios({
        method: 'GET',
        url: '/api/order'
      })
        .then((response) => {
            const orderArray = response.data

        dispatch({
          type: 'SET_ORDER',
          payload: orderArray
        })
        })
        .catch((error) => {
          console.log('error on GET', error);
        });
    }



    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>Time Order Place</th>
                        <th>Type</th>
                        <th>Cost</th>
                    </tr>
                </thead>

                <tbody>
                {orders.map((order) => {
                        return (
                            <tr key={order.id}>
                                <td>{order.customer_name}</td>
                                <td>{order.time}</td>
                                <td>{order.type}</td>
                                <td>{order.total}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </div>
    )
}

export default AdminTable;