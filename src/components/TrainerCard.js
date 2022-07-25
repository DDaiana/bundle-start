import React, { useState } from 'react';


const TrainerCard = ({name, num}) => {

    //data can be modified 
    // const otherName = name.toUpperCase() + '!';

    // using the state
    const [pokemonCount, setPokemonCount] = useState (num);

    const catchAPokemon = () => {
        let newCount = pokemonCount + 1;
        setPokemon(newCount);
    }

    return (
        <>
          <h2>Hi, my name is {name}, or {otherName}</h2>
          <p> I currently have {num} Pokemon</p>
        </>
    )
}


export default TrainerCard;