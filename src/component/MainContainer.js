import React from "react";
import VedioTitle from "./VedioTitle";
import VedioBackGround from "./VedioBackGround";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movie = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movie)
    return (
      <div className='bg-black text-white h-screen text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold flex flex-col justify-center items-center p-4 	'>
        <div class='loading-wave'>
          <div class='loading-bar'></div>
          <div class='loading-bar'></div>
          <div class='loading-bar'></div>
          <div class='loading-bar'></div>
        </div>
        <h2 className='text-center'>
          Use VPN otherwise movies won't show up...😊
        </h2>
      </div>
    );

  const mainMovie = movie[0];
  //   console.log(mainMovie);
  const { title, overview, id } = mainMovie;
  return (
    <div className='pt-[30%] bg-black h-full scrollbar-hide md:pt-0 md:w-full	'>
      <VedioTitle title={title} overview={overview} />
      <VedioBackGround movieId={id} />
    </div>
  );
};

export default MainContainer;
