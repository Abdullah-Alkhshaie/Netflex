import React, { useEffect, useRef } from "react";
import axios from "axios";
import requsits from "../Requsit";
import Slider from "react-slick";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaSpinner } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Main() {
  const [movies, setMovies] = React.useState([]);
  const [statu, setStatu] = React.useState("idle");
  const [error, setError] = React.useState(null);

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
    speed: 15000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    beforeChange: (oldIndex, newIndex) => {
      // Handle slide change if needed
    },
  };

  if (statu === "loading") {
    return <p>Loading...</p>;
  }

  if (statu === "failed") {
    return <p>{error}</p>;
  }

  return (
    <div className="w-full h-[650px] mb-20 text-white relative">
      <MdChevronLeft
        onClick={showPrevMovie}
        size={50}
        className="absolute top-[30%] rounded-full text-white opacity-50 cursor-pointer left-2 z-10 cursor-pointers "
      />
      <Slider ref={sliderRef} {...settings}>
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
      </Slider>

      <MdChevronRight
        onClick={showNextMovie}
        size={50}
        className="absolute top-[30%] rounded-full text-white opacity-50 cursor-pointer right-2 z-10 cursor-pointers "
      />
    </div>
  );
}

export default Main;
