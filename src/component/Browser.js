import { useNowPlayingMovie } from "../hooks/useNowPalyingMovie";
import { usePopularMovie } from "../hooks/usePopularMovie";
import { useUpcomingMovies } from "../hooks/useUpcomingMovies";
import { useTopRatedMovie } from "../hooks/useTopRatedMovie";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browser = () => {
  const showGptSearchView = useSelector((store) => store.gpt.showGptSearch);
  //Fetch data from TMDB API and update the store :
  useNowPlayingMovie();
  usePopularMovie();
  useUpcomingMovies();
  useTopRatedMovie();
  return (
    <div className='main scrollbar-hide   '>
      <Header />
      {showGptSearchView ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browser;
