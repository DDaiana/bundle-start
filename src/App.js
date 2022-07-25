import React from "react";
// import Counter from './components/Counter';
import { Counter } from './components';
import '../public/default.css';


// const App = () => {
//     return (
//     <>
//     <h1>App!</h1>
//     <h2>The future of magic</h2>
//     <Counter tile="potions"/>
//     <Counter tile="teas"/>
//     <Counter tile="papers"/>
//     <Counter tile="pencils"/>
//     <Counter tile="plant"/>
//     </>
//     )
// }

// avoiding the hardcode
const App = () => {

    const products = ["potion", "fire heal", "bicycle"];

    return <>
    <h1>App!</h1>
    <h2>The future of magic</h2>
    {products.map (p => <Counter title={p} />)}
    </>
    
    
}


export default App;