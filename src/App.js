import React, { useState } from 'react';
import PokemonIndex from './components/PokemonIndex';
import TrainerCard from './components/TrainerCard';

// const App = ({name, otherName }) => <h1>Hello {name}! My number is {otherName} </h1>

// const App = ({name, otherName }) => {
//     return (
//         <>
//         <h2>Hello {name}!</h2>
//         <h2>Hello{otherName}!</h2>
//         </>
//     )
// }

const App = () => {
    // return (
    //     <>
    //     <PokemonIndex />
    //     <TrainerCard name="testName" num="8" />
    //     <TrainerCard name="otherTestName" num="5" />
    //     </>
    // )

    //second part of lecture
    // const trainers = [
    //     {name: 'Lee' , num:'5' },
    //     {name: 'Ella', num:'11' },
    //     {name: 'Dan', num:'44'}
    // ]

    // const renderTrainerCards = () => trainers.map( (trainer, index) => 
    // <TrainerCard key={index} name={trainer.name} num={trainer.num} />)

    // return (
    //     <>
    //     <PokemonIndex />
    //     {renderTrainerCards()}
    //     </>
    // )

    //final part of lecture
    const [trainers, setTrainers] = useState([
            {name: 'Lee' , num:'5' },
            {name: 'Ella', num:'11' },
            {name: 'Dan', num:'44'}
        ]);

    const renderTrainerCards = () => trainers.map( (trainer, index) => 
    <TrainerCard key={index} name={trainer.name} num={trainer.num} />)

    return (
        <>
        <PokemonIndex />
        {renderTrainerCards()}
        </>
    )


}


export default App;