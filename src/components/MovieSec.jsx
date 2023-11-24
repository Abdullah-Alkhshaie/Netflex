import React from "react";
import { CiBookmark, CiWarning, CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

function MovieSec({ item }) {
  return (
    <Link onClick={() => window.scrollTo(0, 0)} to={`/movieCate/${item.id}`}>
      <div className="bg-gray-700  mb-5 sm:w-[600px] lg:w-[400px] py-4 px-2 rounded-lg flex cursor-pointer ">
        <div>
          <img
            className="w-[40px] rounded-lg mr-4"
            src={`https://image.tmdb.org/t/p/original/${item?.poster_path}`}
            alt={item.title}
          />
        </div>
        <div>
          <p className="text-gray-400 flex gap-2 ">
            <span className="flex items-center gap-1">
              <CiStar />
              {item?.vote_average.toFixed(1)}
            </span>
            <span>{item?.release_date.slice(0, 4)}</span>
          </p>
          <h1 className="mt-1 ">{item.title}</h1>
        </div>
      </div>
    </Link>
  );
}

export default MovieSec;
