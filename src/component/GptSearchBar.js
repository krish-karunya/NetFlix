import React, { useRef } from "react";
import lang from "../utils/languageConstent";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_Option } from "../utils/constant";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const SearchText = useRef(null);
  const langKey = useSelector((store) => store.config.lang);
  // search movie in tmdb

  const searchMovieTmbd = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=tamil&page=1",
      API_Option
    );

    const json = await data.json();
    // console.log(json.results);
    return json.results;
  };

  const handleGptSearchClick = async () => {
    // console.log(SearchText.current.value);

    const gptQuery =
      "Act as a movie recommendation system and suggest some indian movie for the query" +
      SearchText.current.value +
      "only give me a names of 5 movies , coma separated ,like the example given ahead ,Example Result:soorarai potturu,jersey,friends,dhoni";
    const GptResult = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    // if (!GptResult.choices) {
    //   return "Name is not founded ";
    // }

    // console.log(GptResult.choices[0]?.message?.content);

    const GptMovies = GptResult.choices[0]?.message?.content.split(",");
    // console.log(GptMovies);

    if (!GptMovies) {
      <h1 className='font-bold text-3xl text-white'>Loading...</h1>;
    }
    const promiseArray = GptMovies.map((movie) => searchMovieTmbd(movie));
    //[promise,promise,promise,promise,promise]

    // console.log(promiseArray);
    const tmdbResult = await Promise.all(promiseArray);
    // console.log(tmdbResult);

    // dispatch(addGptMovieResult(tmdbResult));
    //this is the way , we can pass two value in one action function
    if (!tmdbResult) {
      return <h1>Loading...</h1>;
    }
    dispatch(
      addGptMovieResult({ movieName: GptMovies, movieResult: tmdbResult })
    );
  };

  return (
    <div className='  md:pt-[10%] flex justify-center pt-[40%] '>
      <form
        className=' bg-black w-full md:w-1/2 flex '
        onSubmit={(e) => e.preventDefault()}>
        <input
          type='text'
          placeholder={lang[langKey].gptSearchPlaceHolder}
          className=' w-screen  p-4 m-4 md:w-[80%] rounded-md  '
          ref={SearchText}
        />
        <button
          className=' py-2 px-4 bg-red-700 text-white rounded-md w-[30%] m-4'
          onClick={handleGptSearchClick}>
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
