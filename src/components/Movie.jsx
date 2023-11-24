import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CiStar } from "react-icons/ci";

function Movie({ item }) {
  const [like, setLike] = useState(false);
  // console.log(item);
  return (
    <div
      key={item.id}
      className="w-[180px]  sm:w-[220px] md:w-[240px] lg:w-[280px]   border-2 border-gray-800 hover:border-red-600   bg-gray-800 rounded-xl inline-block cursor-pointer relative p-2 m-4"
    >
      <Link to={`/movieCate/${item.id}`}>
        <div className="relative w-full h-full rounded-lg duration-300 overflow-hidden ">
          <img
            className=" w-full h-full rounded-lg block "
            src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`}
            alt={item.title}
          />
          <div className="absolute top-0 left-0 w-full h-full  hover:bg-gradient-to-b from-transparent  to-red-600 opacity-75 duration-300 rounded-lg"></div>
        </div>
        <div className=" w-full  duration-300  min-h-[90px] text-white mt-2 mb-6">
          <p className="bg-gray-900 text-sm px-4 flex justify-evenly rounded-lg mb-4 text-gray-300">
            <span>Movie </span>.
            <span>
              {(item.release_date && item.release_date.slice(0, 4)) ||
                (item.first_air_date && item.first_air_date.slice(0, 4))}{" "}
            </span>
            .
            <span className="flex items-center gap-1">
              <CiStar />
              {item.vote_average.toFixed(1)}
            </span>
          </p>
          <p className="text-lg md:text-lg whitespace-normal  flex justify-center h-full text-center items-center ">
            {item.title?.slice(0, 44) || item.original_name}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Movie;
