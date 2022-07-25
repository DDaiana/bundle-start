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

    const increment = () => {
        setCount(count + 1)
    }

    return(  
         <>
         <h3>Title</h3>
         <p>{count}</p>
         <button>+</button>
         </>
         )

    
}

export default Counter;