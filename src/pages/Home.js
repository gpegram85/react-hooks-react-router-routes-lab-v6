import React from "react";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard"

function Home() {

  const [movieList, setMovieList] = useState([])

  useEffect(() => {
    fetch(`http://localhost:4000/movies`)
    .then(resp => resp.json())
    .then(data => {

      setMovieList(data)})
  }, [])
  
  const movieData = movieList.map((movie) => {
    return <MovieCard movie={movie} key={movie.id} />
  })

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        {movieData}
      </main>
    </>
  );
};

export default Home;
