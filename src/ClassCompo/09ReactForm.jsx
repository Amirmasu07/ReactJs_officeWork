import { useState } from "react";
import React from 'react';

function ReactForm() {
    const [inputs, setInputs] = useState({});

    // const handleChange = (event) => {
    //     const name = event.target.name;
    //     const value = event.target.value;
    //     setInputs(values => ({ ...values, [name]: value }))
    // }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
    }

    const [textarea, setTextarea] = useState(
        "The content of a textarea goes in the value attribute"
    );

    const [myCar, setMyCar] = useState("Volvo");
    const handleChange = (event) => {
        setMyCar(event.target.value)
      }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Enter your name:
                    <input
                        type="text"
                        name="username"
                        value={inputs.username || ""}
                        onChange={handleChange}
                    />
                </label> <br />
                <label>Enater Your Age :
                    <input type="number"
                        name="age"
                        value={inputs.age || ""}
                        onChange={handleChange}
                    />
                </label> <br />
                <input type="submit" /> <br />
                
                <textarea value={textarea} onChange={handleChange} /> <br />

                <select value={myCar} onChange={handleChange}>
                    <option value="Ford">Ford</option>
                    <option value="Volvo">Volvo</option>
                    <option value="Fiat">Fiat</option>
                </select>
            </form>
        </>
    )
}

export default ReactForm;