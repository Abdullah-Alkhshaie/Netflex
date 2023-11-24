import React from "react";
import { useState } from "react";
import requsits from "../Requsit";
import axios from "axios";
import { useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaSpinner } from "react-icons/fa6";

function Main() {
  const [movies, setMovies] = useState([]);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

  useEffect(() => {
    axios
      .get(requsits.requsitPopular)
      .then((response) => setMovies(response.data.results))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMovieIndex((prevIndex) => (prevIndex + 1) % movies.length);
    }, 15000);

    return () => clearInterval(interval);
  }, [movies]);

  const currentMovie = movies[currentMovieIndex];

  const showNextMovie = () => {
    setCurrentMovieIndex((prevIndex) => (prevIndex + 1) % movies.length);
  };
  const showPrevMovie = () => {
    setCurrentMovieIndex((prevIndex) => (prevIndex - 1) % movies.length);
  };

  if (!currentMovie) {
    <div className="absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] ">
      <FaSpinner size={50} className="animate-spin" />
    </div>;
  }

  return (
    <div className="w-full h-[650px] mb-20  text-white">
      <MdChevronLeft
        onClick={showPrevMovie}
        size={50}
        className="absolute top-[30%]  rounded-full text-white opacity-50 cursor-pointer  left-2 z-10 cursor-pointers "
      />
      {currentMovie && (
        <div key={currentMovie.id} className="w-full h-full">
          <div className=" bg-gradient-to-t from-gray-900  absolute w-full h-[650px] "></div>
          <img
            className="w-full h-full object-cover  "
            src={`https://image.tmdb.org/t/p/original/${currentMovie?.backdrop_path}`}
            alt={currentMovie?.title}
          />
          <div className=" absolute w-full bottom-[30%]  px-4  md:p-8 ">
            <h1 className="  text-3xl md:text-5xl  font-bold ">
              {currentMovie?.title}
            </h1>
            <div className="my-4">
              <Link
                onClick={() => window.scrollTo(0, 0)}
                to={`/movieCate/${currentMovie.id}`}
              >
                <button className="bg-gray-300 text-black py-2 px-5 border-gray-300 rounded text-lg mr-4">
                  Play
                </button>
              </Link>
              <button className=" bg-transparent border border-gray-300 py-2 px-5 ">
                Watch Later
              </button>
            </div>

            <p className=" text-xs text-gray-400 ">
              Released {currentMovie?.release_date}
            </p>
            <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] ">
              {currentMovie?.overview.length > 150
                ? currentMovie?.overview.slice(0, 150) + "..."
                : currentMovie?.overview}
            </p>
          </div>
        </div>
      )}
      <MdChevronRight
        onClick={showNextMovie}
        size={50}
        className="  absolute top-[30%] rounded-full  text-white opacity-50 cursor-pointer  right-2 z-10 cursor-pointers "
      />
    </div>
  );
}

export default Main;
