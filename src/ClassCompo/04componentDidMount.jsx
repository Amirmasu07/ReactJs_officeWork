import React, { Component } from 'react';

class componentDidMount extends Component {

    constructor(props) {
        super(props);
        this.state = { favoritecolor: "red" };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ favoritecolor: "yellow" })
        }, 2000)
    }

    render() {
        return (
            <>
                <p>The componentDidMount() method is called after the component is rendered.</p>

                <p>This is where you run statements that requires that the component is already placed in the DOM.</p>
                <h1>My Favorite Color is {this.state.favoritecolor}</h1>
            </>
        );
    }
}

export default componentDidMount;