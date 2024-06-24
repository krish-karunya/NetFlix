import { useDispatch, useSelector } from "react-redux";
import { API_Option } from "../utils/constant";
import { addPopularMovie } from "../utils/movieSlice";
import { useEffect } from "react";

export const usePopularMovie = () => {
  //Memoization => here we are controlling the unwanted API calls
  const popularMovie = useSelector((store) => store.movies.popularMovie);

  const dispatch = useDispatch();
  const getPopularMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_Option
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addPopularMovie(json.results));
  };
  useEffect(() => {
    !popularMovie && getPopularMovie();
  }, []);
};
