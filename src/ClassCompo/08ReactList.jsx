import React from 'react';


function Car(props) {
    return <li>I am a {props.brand}</li>;
}

function ReactList() {
    // const cars = ['Ford', 'BMW', 'Audi'];
    const cars = [
        { id: 1, brand: 'Ford' },
        { id: 2, brand: 'BMW' },
        { id: 3, brand: 'Audi' }
    ];
    return (
        <>
            <h3>Map</h3>
            <p>In React, you will render lists with some type of loop.</p>
            <p>The JavaScript map() array method is generally the preferred method.</p>

            {/* <h2>Who lives in my garage?</h2> */}
            {/* <ul>
                {cars.map((car) => <Car brand={car} />)}
            </ul> */}

            <h3>Keys</h3>
            <p> Keys allow React to keep track of elements. This way, if an item is updated or removed, only that item will be re-rendered instead of the entire list.</p>
            <p>Keys need to be unique to each sibling. But they can be duplicated globally.</p>

            <h2>Who lives in my garage?</h2>
            <ul>
                {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
            </ul>

        </>
    );
}

export default ReactList;