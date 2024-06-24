import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movie = useSelector((store) => store.movies);

  return (
    movie.nowPlayingMovies && (
      <div className='bg-black max-h-screen w-full '>
        <div className='mt-0 z-20  relative md:-mt-52 pl-12 h-full w-full bg-black '>
          <MovieList
            title={"NowPlayingMovie"}
            movies={movie.nowPlayingMovies}
          />
          <MovieList title={"UpComing Movies"} movies={movie.upcomingMovie} />
          <MovieList title={"Top Movies"} movies={movie.TopRatedMovie} />
          <MovieList title={"Popular Movies"} movies={movie.popularMovie} />
          <MovieList title={"Horror Movies"} movies={movie.nowPlayingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
