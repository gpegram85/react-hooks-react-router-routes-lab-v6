import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {

  const [movie, setMovie] = useState({})
  const params = useParams()
  const movieId = params.id

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${movieId}`)
    .then(resp => resp.json())
    .then(data => setMovie(data))
    .catch(error => console.error(error))
  }, [movieId])

  if(!movie.title){
    return <h1>Loading...</h1>
  }

  const {title, time, genres} = movie

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{title}</h1>
        <p>Runtime: {time}</p>
        Genre: {genres.map((genre, index) => {
          return <span key={index}>{genre}</span>
        })}
      </main>
    </>
  );
};

export default Movie;
