import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BG_URL } from "../utils/constant";

const GptSearch = () => {
  return (
    <div>
      <div className=" fixed -z-10 ">
        <img
          src={BG_URL}
          alt="bgimage"
          className=" h-screen object-cover md:w-screen"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
