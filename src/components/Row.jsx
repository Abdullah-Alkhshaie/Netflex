import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Movie from "./Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

function Row({ title, apiData, rowId }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(apiData).then((response) => setMovies(response.data.results));
  }, [apiData]);

  const sliderLeft = () => {
    let slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const sliderRight = () => {
    let slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  //   console.log(movies.map((movie) => console.log(movie?.title)));
  //   console.log(movies);

  return (
    <>
      <h1 className="text-white font-bold md:text-xl p-4">{title}</h1>
      <div className="flex   relative items-center group">
        <MdChevronLeft
          onClick={sliderLeft}
          size={40}
          className="rounded-full absolute left-0 opacity-50 hover:opacity-100  cursor-pointer z-10 bg-white text-black hidden group-hover:block"
        />
        <div
          id={"slider" + rowId}
          className="w-full h-full  overflow-x-scroll scrollbar-hide scroll-smooth whitespace-nowrap relative"
        >
          {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
        <MdChevronRight
          onClick={sliderRight}
          size={40}
          className="rounded-full absolute right-0 hidden group-hover:block opacity-50 hover:opacity-100 cursor-pointer z-10 bg-white text-black"
        />
      </div>
    </>
  );
}

export default Row;
