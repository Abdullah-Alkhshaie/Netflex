import React, { useEffect, useRef } from "react";
import axios from "axios";
import requsits from "../Requsit";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaSpinner } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Main() {
  const [movies, setMovies] = React.useState([]);
  const [statu, setStatu] = React.useState("idle");
  const [error, setError] = React.useState(null);
  const [currentMovie, setCurrentMovie] = React.useState(null);

  const sliderRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      setStatu("loading");
      try {
        const response = await axios.get(requsits.requsitPopular);
        setMovies(response.data.results);
        setStatu("success");
      } catch (err) {
        setError("Error fetching data");
        setStatu("failed");
        console.error(err);
      }
    };

    fetchData();
  }, []);

  const showPrevMovie = () => {
    sliderRef.current.slickPrev();
  };

  const showNextMovie = () => {
    sliderRef.current.slickNext();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000, // Set to 9000 milliseconds (9 seconds)
    cssEase: "linear",
    beforeChange: (oldIndex, newIndex) => {
      setCurrentMovie(movies[newIndex]);
    },
    prevArrow: <></>, // Hide default previous arrow
    nextArrow: <></>, // Hide default next arrow
  };

  if (statu === "loading") {
    return (
      <div className="w-full h-[650px] mb-20 text-white flex items-center justify-center">
        <FaSpinner size={50} className="animate-spin" />
      </div>
    );
  }

  if (statu === "failed") {
    return <p>{error}</p>;
  }

  return (
    <div className="relative">
      <MdChevronLeft
        onClick={showPrevMovie}
        size={50}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 rounded-full text-white opacity-50 cursor-pointer z-10 hover:opacity-100 transition-opacity duration-300"
      />

      <Slider ref={sliderRef} {...settings}>
        {movies.map((movie) => (
          <div key={movie.id} className="relative">
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 opacity-70"></div>
            <img
              className="w-full h-[650px] object-cover"
              src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
              alt={movie?.title}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                {movie?.title}
              </h1>
              <div className="flex gap-4">
                <Link
                  onClick={() => window.scrollTo(0, 0)}
                  to={`/movieCate/${movie.id}`}
                >
                  <button className="bg-gray-300 text-black py-2 px-5 border-gray-300 rounded text-lg mr-4">
                    Play
                  </button>
                </Link>
                <button className="bg-transparent border border-gray-300 py-2 px-5">
                  Watch Later
                </button>
              </div>
              <p className="text-lg text-gray-400 my-2">
                Released {movie?.release_date}
              </p>
              <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] leading-6">
                {movie?.overview.length > 150
                  ? movie?.overview.slice(0, 280) + "..."
                  : movie?.overview}
              </p>
            </div>
          </div>
        ))}
      </Slider>

      <MdChevronRight
        onClick={showNextMovie}
        size={50}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 rounded-full text-white opacity-50 cursor-pointer z-10 hover:opacity-100 transition-opacity duration-300"
      />
    </div>
  );
}

export default Main;
