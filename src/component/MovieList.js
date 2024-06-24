import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";
const MovieList = ({ title, movies }) => {
  if (movies == null) return;
  // console.log(movies[0].id);
  return (
    <div className='pb-10 '>
      <h1 className='  text-xl md:text-3xl text-white py-4 '>{title}</h1>
      <div className='flex overflow-x-scroll scrollbar-hide -pt-500'>
        <div className='flex '>
          {movies &&
            movies.map((movie, index) => (
              <Link to={"/vedio/" + movies[index].id} key={movies[index].id}>
                <MovieCard posterPath={movie.poster_path} />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
