import React from "react";
import { Counter } from './components';
import '../public/default.css';

const App = () => {

    const albums = ["Isolation", "Sin Miedo(del Amor y Otros Demonios)"];

    return <>
    <h1>LAP3 Exercise</h1>
    <h2>Kali Uchis</h2>
    {albums.map (a => <Counter title={a} />)}
    </>
    
    
}


export default App;