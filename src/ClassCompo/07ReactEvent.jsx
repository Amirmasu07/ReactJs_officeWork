import React from 'react';

function ReactEvent() {
    const shoot = () => {
        alert("Great Shot!");
    }
    const shoot2 = (a) => {
        alert(a);
      }
    return (
        <>
            <h3>Adding Events</h3>
            <p>React events are written in camelCase syntax:</p>
            <p> onClick instead of onclick</p>
            <p>React event handlers are written inside curly braces:</p>
            <p>onClick={shoot}  instead of onClick="shoot()".</p>

            <h3>Passing Arguments</h3>
            <p>To pass an argument to an event handler, use an arrow function.</p>

            <button onClick={shoot}>Take the shot!</button>

            <button onClick={() => shoot2("Goal!")}>Take the shot2!</button>
        </>
    )
}

export default ReactEvent;