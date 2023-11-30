import { useSelector, useDispatch } from 'react-redux'

function PizzaItem({ pizza }) {
    const dispatch = useDispatch()


    const addButton = () => {
        dispatch({
            type: 'ADD_PIZZA_TO_CART',
            payload: pizza
          })
    }
    
    
    
    return (
        <ul>
            <li>{pizza.name}</li>
            <li>{pizza.description}</li>
            <li>{pizza.price}</li>
            <li>{pizza.image_path}</li>
            <button onClick={addButton}>Add</button>
            <button>Remove</button>
        </ul>
    )
    
    }
    
    export default PizzaItem;