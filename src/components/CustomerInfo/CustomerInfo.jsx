import React, { useState, useEffect } from 'react';
import PizzaItem from "../PizzaItem/PizzaItem";
import { useSelector, useDispatch } from 'react-redux'


function CustomerInfo() {
    const dispatch = useDispatch()

    const [nameInput, setNameInput] = useState('');
    const [streetInput, setStreetInput] = useState('');
    const [cityInput, setCityInput] = useState('');
    const [zipInput, setZipInput] = useState('');


    const [selectedOption, setSelectedOption] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch({
            type: 'CREATE_CUSTOMER_INFO',
            payload: { nameInput, streetInput, cityInput, zipInput, selectedOption }
        })

    }

    const onValueChange = (e) => {
        setSelectedOption(e.target.value)
    }



    return (
        <div>

            <form onSubmit={handleSubmit}>

                <input
                    onChange={(e) => setNameInput(e.target.value)}
                    value={nameInput}
                    type='text'
                    placeholder='Name'
                />

                <input
                    onChange={(e) => setStreetInput(e.target.value)}
                    value={streetInput}
                    type='text'
                    placeholder='Street Address'
                />

                <input
                    onChange={(e) => setCityInput(e.target.value)}
                    value={cityInput}
                    type='text'
                    placeholder='City'
                />

                <input
                    onChange={(e) => setZipInput(e.target.value)}
                    value={zipInput}
                    type='text'
                    placeholder='Zip'
                />

                <br />

                <label> delivery
                    <input
                        value="delivery"
                        type='radio'

                        checked={selectedOption === "delivery"}
                        onChange={onValueChange}
                    />
                </label>

                <br />

                <label> pickup
                    <input
                        value="pickup"
                        type='radio'

                        checked={selectedOption === "pickup"}
                        onChange={onValueChange}
                    />
                </label>

            </form>

            <button>Next</button>

        </div>
    )
}

export default CustomerInfo;