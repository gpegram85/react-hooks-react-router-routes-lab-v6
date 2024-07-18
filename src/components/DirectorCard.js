import React from "react";

function DirectorCard({director}) {
    
    const {name, movies} = director
    
    return(
        <article>
            <h2>{name}</h2>
            {movies.map((movie, index) => {
                return <li key={index}>{movie}</li>
            })}
        </article>
    )
}

export default DirectorCard