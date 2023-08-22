import React from 'react';


function MissedGoal() {
    return <h1>MISSED!</h1>;
}

function MadeGoal() {
    return <h1>GOAL!</h1>;
}
function ReactConditionalRendering(props) {
    const isGoal = props.isGoal;
    if (isGoal) {
        return <MadeGoal />;
    }
    return <MissedGoal />
    // return (
    //     <>
    //         In React, you can conditionally render components.

    //         There are several ways to do this.

    //         if Statement
    //         We can use the if JavaScript operator to decide which component to render.
    //     </>
    // )
}


// function ReactConditionalRendering(props) {
//   const cars = props.cars;
//   return (
//     <>
//       <h1>Garage</h1>
//       {cars.length > 0 &&
//         <h2>
//           You have {cars.length} cars in your garage.
//         </h2>
//       }
//     </>
//   );
// }


export default ReactConditionalRendering;