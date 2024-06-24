import React from "react";

const VedioTitle = ({ title, overview }) => {
  return (
    <div className='  w-screen aspect-video pt-[15%] px-12 md:px-24 absolute text-white bg-gradient-to-r from-black z-10'>
      <h1 className='font-bold  text-3xl md:text-4xl'>{title}</h1>
      <p className='hidden md:inline-block py-6 text-lg w-2/4'>{overview}</p>
      <div className='flex'>
        <button className='bg-white text-black p-2 md:p-4 px-6 md:px-12  font-bold  text-lg md:text-xl bg-opacity-70 rounded-lg hover:opacity-60 '>
          ▶ Play
        </button>
        <button className='hidden md:inline-block bg-slate-700 text-white p-4 px-12 font-bold text-xl bg-opacity-70 rounded-lg mx-2'>
          ! More Info
        </button>
      </div>
    </div>
  );
};

export default VedioTitle;
