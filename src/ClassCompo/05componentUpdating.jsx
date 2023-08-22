import React, { Component } from 'react';

class componentUpdating extends Component {

    constructor(props) {
        super(props);
        this.state = { favoritecolor: "red" };
    }
    shouldComponentUpdate() {
        return true;
    }
    changeColor = () => {
        this.setState({ favoritecolor: "blue" });
    }
    render() {
        return (
            <>
                <p>The next phase in the lifecycle is when a component is updated.</p>

                <p>A component is updated whenever there is a change in the component's state or props.</p>

                <p>React has five built-in methods that gets called, in this order, when a component is updated:</p>

                <p>1.getDerivedStateFromProps() <br />
                    2.shouldComponentUpdate() <br />
                    3.render()<br />
                    4.getSnapshotBeforeUpdate()<br />
                    5.componentDidUpdate()</p>
                <p>The render() method is required and will always be called, the others are optional and will be called if you define them.</p>

                <h1>My Favorite Color is {this.state.favoritecolor}</h1>
                <button type="button" onClick={this.changeColor}>Change color</button>
            </>
        );
    }
}

export default componentUpdating;