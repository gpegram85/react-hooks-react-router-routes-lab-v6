import React from "react";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import ActorCard from "../components/ActorCard";

function Actors() {
  const [actors, setActors] = useState([])

  useEffect(() => {
    fetch(`http://localhost:4000/actors/`)
    .then(resp => resp.json())
    .then(data => setActors(data))
    .catch(error => console.error(error))
  }, [])

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        <ul>{actors.map(actor => {
          return <ActorCard actor={actor} key={actor.id} />
        })}
        </ul>
      </main>
    </>
  );
};

export default Actors;
