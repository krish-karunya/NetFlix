import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVedio } from "../utils/movieSlice";
import { API_Option } from "../utils/constant";

const useMovieTrailer = (movieId) => {
  //Memoization => here we are controlling the unwanted API calls
  const trailerVedio = useSelector((store) => store.movies.trailerVedio);

  const dispatch = useDispatch();

  const getMovieVedio = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_Option
    );
    const json = await data.json();
    // console.log(json);
    const trailer = json.results.filter((vedio) => vedio.type === "Trailer");
    const trailers = trailer.length ? trailer[0] : json.results[0];
    // console.log(trailers);
    dispatch(addTrailerVedio(trailers));
  };
  useEffect(() => {
    !trailerVedio && getMovieVedio();
  }, []);
};

export default useMovieTrailer;
