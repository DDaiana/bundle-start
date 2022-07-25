import React, { useState } from "react";
// search for hooks; hooks only make sense with react and the belong at the top 

const Counter = ({ title }) => {
    const [ count, setCount ] = useState(0);

    const increment = (num) => {
        setCount(prev => prev + num)
    }

    const decrement = (num) => {
        setCount(prev => prev - num )
    }
    
    const reset = () => {
        setCount(0);
    }

    return <div className={"counter " + (count % 2 == 0 ? "even" : "odd") }>
         <h3>{title}</h3>
         <p className={ count < 0 ? "debt" : "" } role="figure">{count}</p>
         
         {/* <button onClick={() => decrement(10)}>--</button> */}
       
    </div> 
        
         

    
}

export default Counter;