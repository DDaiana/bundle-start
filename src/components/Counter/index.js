import React, { useState } from "react";
// search for hooks; hooks only make sense with react and the belong at the top 

const Counter = () => {

    //this is render everytime the page is loaded
    // return <h3>Counter!</h3>

    //using useState gives as a variable, and a way to change the variable
    // const example = useState();
    // console.log(example); gives an array undefined 
    // so we do array distructuring 
    const [ count, setCount ] = useState(0);

    // const increment = () => {
    //     this does not work because we don't know the value of count when the function will be triggered
    //     setCount(count + 1)
    //     so we need to use previous value
    //     setCount(prev => prev + 1)
    // }

    const increment = (num) => {
        setCount(prev => prev + num)
    }

    const decrement = (num) => {
        setCount(prev => prev - num )
    }
    
    const reset = () => {
        setCount(0);
    }

    return (  
         <>
         <h3>Title</h3>
         <p>{count}</p>
         <button onClick={() => decrement(10)}>--</button>
         <button onClick={() => decrement(1)}>-</button>
         <button onClick={reset}>Reset</button>
         <button onClick={() => increment(1)}>+</button>
         <button onClick={() => increment(10)}>++</button>
         </>
         )

    
}

export default Counter;