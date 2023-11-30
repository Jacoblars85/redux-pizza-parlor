import { useSelector, useDispatch } from 'react-redux'

function Totalizer() {
    const cart = useSelector((store) => store.cart)


    const math = (cart) => {
        let total = 0;

        for (const item of cart) {
             total += Number(item.price)
        }
        return total;
    }

    return (
        <span>Total: {math(cart)}</span>
    )
}

export default Totalizer;