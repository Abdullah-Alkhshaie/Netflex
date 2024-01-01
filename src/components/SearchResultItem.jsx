import React from "react";
import { Link } from "react-router-dom";

function SearchResultItem({ item }) {
  return (
    <Link onClick={() => window.scrollTo(0, 0)} to={`/movieCate/${item.id}`}>
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
        {item.poster_path ? (
          <img
            className="w-full h-64 object-cover object-center"
            src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
            alt={item.title}
          />
        ) : (
          <div className="w-full h-64 bg-gray-600 flex items-center justify-center">
            No Image Available
          </div>
        )}
        <div className="p-4">
          <h3 className="text-white text-lg font-bold mb-2">
            {item.title.slice(0, 15)}
          </h3>
          <p className="text-gray-400">{item.release_date}</p>
        </div>
      </div>
    </Link>
  );
}

export default SearchResultItem;
