import React from "react";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import DirectorCard from "../components/DirectorCard";

function Directors() {

  const [directors, setDirectors] = useState([])

  useEffect(() => {
    fetch(`http://localhost:4000/directors/`)
    .then(resp => resp.json())
    .then(data => setDirectors(data))
    .catch(error => console.error(error))
  }, [])

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        <ul>{directors.map(director => {
          return <DirectorCard director={director} key={director.id} />
        })}
        </ul>
      </main>
    </>
  );
};

export default Directors;
