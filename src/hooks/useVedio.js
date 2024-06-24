import { useEffect } from "react";
import { API_Option } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addVedio } from "../utils/movieSlice";

export const useVedio = (movieId) => {
  const vedio = useSelector((store) => store.movies?.vedio);
  const dispatch = useDispatch();
  const FetchVedioData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_Option
    );
    const json = await data.json();
    // console.log(json);
    const vedios = json.results.filter((vedio) => vedio.type === "Trailer");
    const SelectedVedio = vedios.length ? vedios[0] : json.results[0];
    dispatch(addVedio(SelectedVedio));
  };
  useEffect(() => {
    !vedio && FetchVedioData();
  }, []);
};
