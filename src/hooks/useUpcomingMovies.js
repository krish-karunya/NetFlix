import { useDispatch, useSelector } from "react-redux";
import { API_Option } from "../utils/constant";
import { addUpcomingMovie } from "../utils/movieSlice";
import { useEffect } from "react";

export const useUpcomingMovies = () => {
  //Memoization => here we are controlling the unwanted API calls
  const upcomingMovie = useSelector((store) => store.movies.upcomingMovie);

  const dispatch = useDispatch();
  const getupcomingMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_Option
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addUpcomingMovie(json.results));
  };
  useEffect(() => {
    !upcomingMovie && getupcomingMovie();
  }, []);
};
