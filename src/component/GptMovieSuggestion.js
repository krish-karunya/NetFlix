import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const gpt = useSelector((store) => store.gpt);
  const { movieResult, movieName } = gpt;
  if (!movieResult && !movieName) {
    return null;
  }
  return (
    <div className='p-4 m-4 bg-black text-white opacity-95'>
      <div>
        <h1>
          {movieName.map((movie, index) => (
            <MovieList title={movie} movies={movieResult[index]} />
          ))}
        </h1>
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
