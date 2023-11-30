

function PizzaItem({ pizza }) {
    
    return (
        <ul>
            <li>{pizza.name}</li>
            <li>{pizza.description}</li>
            <li>{pizza.price}</li>
            <li>{pizza.image_path}</li>
        </ul>
    )
    
    }
    
    export default PizzaItem;