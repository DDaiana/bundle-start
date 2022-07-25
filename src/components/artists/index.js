import React, { useState } from 'react';

const TrainerCard = ({ name, num }) => {
    const [pokemonCount, setPokemonCount] = useState(num)

    console.log('This is pokemon count', pokemonCount)

    const catchAPokemon = () => {
        let newCount = pokemonCount + 1
        setPokemonCount(newCount)
    }


    return (
        <>
            <h2>Artist name: {name} </h2>
            <button>See albums</button>
            <p>To display list of albums after clicking the button</p>
        </>
    )
}


export default TrainerCard
