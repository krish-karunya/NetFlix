import { useDispatch, useSelector } from "react-redux";
import { API_Option } from "../utils/constant";
import { addNowPlayingMovie } from "../utils/movieSlice";
import { useEffect } from "react";

export const useNowPlayingMovie = () => {
  //Memoization => here we are controlling the unwanted API calls

  const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);

  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_Option
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addNowPlayingMovie(json.results));
  };
  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies();
  }, []);
};
