import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VedioBackGround = ({ movieId }) => {
  //fetch trailor vedio && updating the store with trailer vedio data
  useMovieTrailer(movieId);

  const vedio = useSelector((store) => store.movies?.trailerVedio);
  return (
    <div className='bg_utube w-full h-full overflow-hidden'>
      <iframe
        className='w-full aspect-video overflow-hidden'
        src={
          "https://www.youtube.com/embed/" + vedio?.key + "?&autoplay=1&mute=1"
        }
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowfullscreen></iframe>
    </div>
  );
};

export default VedioBackGround;
