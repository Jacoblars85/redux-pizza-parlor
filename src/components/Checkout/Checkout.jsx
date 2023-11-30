import { useSelector, useDispatch } from 'react-redux'
import Totalizer from '../Totalizer/Totalizer'

function Checkout() {
    const customerInfo = useSelector((store) => store.customerInfo)
    const cart = useSelector((store) => store.cart)


    return (
        <div>

            <ul>
                <ul>{customerInfo.nameInput}</ul>
                <ul>{customerInfo.streetInput}</ul>
                <ul>{customerInfo.cityInput}, MN {customerInfo.zipInput}</ul>
            </ul>

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

            <h2><Totalizer /> </h2>
            
            <button>CHECKOUT</button>

        </div>
    )
}

export default Checkout;