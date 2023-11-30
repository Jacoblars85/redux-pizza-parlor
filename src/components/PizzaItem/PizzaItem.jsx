import { useSelector, useDispatch } from 'react-redux'

function PizzaItem({ pizza }) {
    const dispatch = useDispatch()


    const addButton = () => {
        dispatch({
            type: 'ADD_PIZZA_TO_CART',
            payload: pizza
        })
    }

    const removeButton = () => {
        dispatch({
            type: 'REMOVE_PIZZA_FROM_CART',
            payload: pizza
        })
    }



    return (
        <ul>
            <li>{pizza.name}</li>
            <li>{pizza.description}</li>
            <li>{pizza.price}</li>
            <li><img src={pizza.image_path} /></li>
            <button onClick={addButton}>Add</button>
            <button onClick={removeButton}>Remove</button>
        </ul>
    )

}

export default PizzaItem;