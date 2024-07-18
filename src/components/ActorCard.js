import React from "react";

function ActorCard({actor}) {
    const {name, movies} = actor
    
    return(
        <article>
            <h2>{name}</h2>
            {movies.map((movie, index) => {
                return <li key={index}>{movie}</li>
            })}
        </article>
    )
}

export default ActorCard