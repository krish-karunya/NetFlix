import React from "react";
import { IMG_CDN } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) {
    return null;
  }
  const handleClick = () => {};

  return (
    <div
      className=' w-36 flex  md:w-48 pr-2 hover:scale-90 transition-all'
      onClick={handleClick}>
      <img src={IMG_CDN + posterPath} alt='IMG' />
      {/* console.log(movieId); */}
    </div>
  );
};

export default MovieCard;
