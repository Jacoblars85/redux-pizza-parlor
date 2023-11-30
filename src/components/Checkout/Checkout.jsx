import PizzaItem from "../PizzaItem/PizzaItem";
import { useSelector, useDispatch } from 'react-redux'

function Checkout() {
    const pizzaMenu = useSelector((store) => store.pizzaMenu)


    return (
        <div>
           <p>hi</p>
        </div>
    )
}

export default Checkout;