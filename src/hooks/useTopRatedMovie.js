import { useDispatch, useSelector } from "react-redux";
import { API_Option } from "../utils/constant";
import { addTopRatedMovie } from "../utils/movieSlice";
import { useEffect } from "react";

export const useTopRatedMovie = () => {
  //Memoization => here we are controlling the unwanted API calls
  const TopRatedMovie = useSelector((store) => store.movies.TopRatedMovie);

  const dispatch = useDispatch();
  const getTopRatedMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated?page=1",
      API_Option
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addTopRatedMovie(json.results));
  };
  useEffect(() => {
    !TopRatedMovie && getTopRatedMovie();
  }, []);
};
