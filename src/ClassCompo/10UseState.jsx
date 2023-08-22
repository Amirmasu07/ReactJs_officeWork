import React from 'react';
import { useState } from 'react';

function UseState() {
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
    });

    const updateColor = () => {
        setCar(previousState => {
            return { ...previousState, color: "yellow" }
        });
    }
    return (
        <>
            <h1>My {car.brand}</h1>
            <p>It is {car.color} {car.model} from {car.year}</p>

            <button type='button' onClick={updateColor} >Black</button>
        </>
    )
}

export default UseState;