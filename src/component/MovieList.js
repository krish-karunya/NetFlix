import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";
const MovieList = ({ title, movies }) => {
  // console.log(movies[0].id);
  // if (!movies.poster_path || movies) {
  //   return null;
  // }

  if (!title)
    return (
      <div className='bg-black text-white h-screen text-lg sm:text-xl md:text-2xl  lg:text-4xl font-bold flex flex-col justify-center items-center p-4 	'>
        <div class='loading-wave absolute top-72 md:top-96'>
          <div class='loading-bar'></div>
          <div class='loading-bar'></div>
          <div class='loading-bar'></div>
          <div class='loading-bar'></div>
        </div>
        <h2 className='text-center absolute top-96'>Please Wait...😊</h2>
      </div>
    );

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
