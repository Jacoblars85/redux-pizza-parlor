import { useSelector, useDispatch } from 'react-redux'
import Totalizer from '../Totalizer/Totalizer'
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function Checkout() {
    const customerInfo = useSelector((store) => store.customerInfo)
    const cart = useSelector((store) => store.cart)
    const total = useSelector((store) => store.total)

    const dispatch = useDispatch()

    const history = useHistory()


    const clearCart = () => {
        axios({
            method: 'POST',
            url: '/api/order',
            data: {
                customer_name: customerInfo.nameInput,
                street_address: customerInfo.streetInput,
                city: customerInfo.cityInput,
                zip: customerInfo.zipInput,
                type: customerInfo.selectedOption,
                total: total,
                pizzas: cart.map((item) => {
                    return (
                        {
                            id: item.id,
                            quantity: 1
                        }
                    )
                })
            }
        }).then((response) => {


        }).catch((err) => {
            console.log(err);
        });


        dispatch({
            type: 'CLEAR_CART'
        })
        history.push("/")
    }


    return (
        <div>


            <ul>{customerInfo.nameInput}</ul>
            <ul>{customerInfo.streetInput}</ul>
            <ul>{customerInfo.cityInput}, MN {customerInfo.zipInput}</ul>


            <ul>
                for {customerInfo.selectedOption}
            </ul>
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>Cost</th>
                    </tr>
                </thead>

                <tbody>

                    {cart.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>

            <h2>{total}</h2>

            <button onClick={clearCart}>CHECKOUT</button>

        </div>
    )
}

export default Checkout;