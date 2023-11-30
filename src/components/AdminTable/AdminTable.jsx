import { useSelector, useDispatch } from 'react-redux'
import Totalizer from '../Totalizer/Totalizer'
import { useHistory } from 'react-router-dom';

function Checkout() {


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
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                </tbody>
            </table>

        </div>
    )
}

export default Checkout;