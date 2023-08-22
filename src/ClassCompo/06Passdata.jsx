import React from 'react';

function passdata(props) {
    return <h2>I am a {props.brand}!</h2>;
}

function Garage() {
    return (
        <>
            <h1>Who lives in my garage?</h1>
            <passdata brand="Ford" />
        </>
    );
}

export default passdata;