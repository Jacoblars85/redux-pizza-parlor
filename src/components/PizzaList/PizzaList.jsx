import PizzaItem from "../PizzaItem/PizzaItem";
import { useSelector, useDispatch } from 'react-redux'

function PizzaList() {
    const pizzaMenu = useSelector((store) => store.pizzaMenu)


    return (
        <div>
            {
                pizzaMenu.map((pizza) => {
                    return (
                        <PizzaItem key={pizza.id} pizza={pizza}/>
                    )
                } 


            )}
        </div>
    )

}

export default PizzaList;