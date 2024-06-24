import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useVedio } from "../hooks/useVedio";
import { removeVedio } from "../utils/movieSlice";
import { useNavigate } from "react-router-dom";

const Vedio = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { movieId } = useParams();
  // console.log(movieId);
  useVedio(movieId);

  const vedio = useSelector((store) => store.movies?.vedio);

  if (!vedio) {
    <h1>Movie trailerVedio is not Available...</h1>;
  }
  const handleClick = () => {
    dispatch(removeVedio());
    navigate("/browser");
  };

  return (
    <div className='w-screen'>
      <button
        className='absolute top-14 bg-blue-700 text-white text-sm align-middle rounded-md m-4 p-3 '
        onClick={handleClick}>
        ↩ BackButton
      </button>
      <iframe
        className=' h-svh  w-full'
        src={
          "https://www.youtube.com/embed/" + vedio?.key + "?&autoplay=1&mute=1"
        }
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowFullScreen='allowFullScreen'></iframe>
    </div>
  );
};

export default Vedio;
