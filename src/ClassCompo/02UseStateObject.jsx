import React, { Component } from 'react';

class UseStateObject extends Component {

    constructor(props) {
        super(props);
        this.state = {
            brand: "Ford",
            model: "Mustang",
            color: "red",
            year: 1964
        };
    }
    render() {
        return (
            <>
            <p>Refer to the state object anywhere in the component by using the this.state.propertyname syntax:</p>
                <h1>My {this.state.brand}</h1>
                <p>
                    It is a {this.state.color}
                    {this.state.model}
                    from {this.state.year}.
                </p>
            </>
        );
    }
}

export default UseStateObject;