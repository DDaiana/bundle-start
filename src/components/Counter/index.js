import React, { useState } from "react";


const Counter = ({ title }) => {

    // const [ count, setCount ] = useState(0);
    // const [artistAlbums, setAlbumsList] = useState(title);
    // console.log(`This artist's albums `, artistAlbums)


    const giveAlbumsList = (songsList) => {
        setCount(prev => prev - num )
    }
    

    return <div className="counter ">
         <h3>{title}</h3>         
         <button onClick={() => giveAlbumsList()}>See albums</button>
         <p role="figure"></p>      
    </div> 
        
         

    
}

export default Counter;