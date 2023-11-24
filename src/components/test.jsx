import React from "react";
import { useState } from "react";
import requsits from "../Requsit";
import axios from "axios";
import { useEffect } from "react";

function Main() {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios
      .get(requsits.requsitPopular)
      .then((respone) => setMovies(respone.data.results))
      .catch((err) => console.log(err));
  }, []);

  // console.log(movie);

  return (
    <div className="w-full h-[550px]  text-white">
      <div className="w-full h-full">
        <div className=" bg-gradient-to-r from-black absolute w-full h-[550px] "></div>
        <img
          className="w-full h-full object-cover  "
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className=" absolute w-full top-[20%] px-4  md:p-8 ">
          <h1 className="  text-3xl md:text-5xl  font-bold ">{movie?.title}</h1>
          <div className="my-4">
            <button className="bg-gray-300 text-black py-2 px-5 border-gray-300 rounded text-lg mr-4">
              Play
            </button>
            <button className=" bg-transparent border border-gray-300 py-2 px-5 ">
              Watch Leter
            </button>
          </div>
          <p className=" text-xs text-gray-400 ">
            Relased {movie?.release_date}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] ">
            {movie?.overview.length > 150
              ? movie?.overview.slice(0, 150) + "..."
              : movie?.overview}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
