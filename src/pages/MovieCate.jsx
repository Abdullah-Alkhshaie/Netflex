import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"; // Import useParams from react-router-dom
import { key } from "../Requsit";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { CiBookmark, CiWarning, CiStar } from "react-icons/ci";
import { FaSpinner } from "react-icons/fa6";
import MovieSec from "../components/MovieSec";
import requsits from "../Requsit";

function MovieCate() {
  const { id } = useParams(); // Use the useParams hook to get the id from the route

  const [movie, setMovie] = useState(null);
  const [movieSec, setMovieSec] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US&page=1`
      )
      .then((response) => setMovie(response.data))
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    axios
      .get(requsits.requsitPopular)
      .then((response) => setMovieSec(response.data.results));
  }, []);

  console.log(movieSec);

  if (!movie) {
    // If movie is still null, return loading or an error message
    return (
      <div className="absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] ">
        <FaSpinner size={50} className="animate-spin" />
      </div>
    ); // or <div>Error loading movie data.</div>;
  }

  const handleFacebookShare = () => {
    if (movie) {
      const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        window.location.href
      )}`;
      window.open(shareUrl, "_blank");
    }
  };

  const handleTwitterShare = () => {
    if (movie) {
      const shareUrl = `https://twitter.com/intent/tweet?text=Check%20out%20this%20awesome%20movie&url=${encodeURIComponent(
        window.location.href
      )}`;
      window.open(shareUrl, "_blank");
    }
  };

  const handleWhatsAppShare = () => {
    if (movie) {
      const shareUrl = `https://api.whatsapp.com/send?text=Check%20out%20this%20awesome%20movie%20${encodeURIComponent(
        window.location.href
      )}`;
      window.open(shareUrl, "_blank");
    }
  };
  // console.log(movie);

  return (
    <div className="bg-gray-800   mt-20 xl:flex gap-20 ">
      <div className=" bg-gray-800 flex flex-col  xl:flex-1 rounded-lg justify-center items-center">
        <div className="bg-gray-700 rounded-lg ml-5 mr-5 mt-10 mb-10 lg:mb-20">
          <video
            controls
            className="w-full h-full  object-cover rounded-t-lg "
            poster={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
            src="#"
          ></video>

          <div className="flex bg-gray-700 rounded-b-lg justify-around p-4 text-sm ">
            <p className="flex items-center gap-1 cursor-pointer">
              <CiBookmark />
              Add Bookmark
            </p>
            <p className="flex items-center cursor-pointer gap-1">
              <CiWarning />
              Report
            </p>
          </div>
        </div>

        <div className="flex mb-10">
          <button
            onClick={handleFacebookShare}
            className="bg-blue-800 mr-5 flex items-center gap-2 text-white py-4 px-2 hover:-translate-y-1 hover:opacity-50 duration-200 rounded "
          >
            <FaFacebookF /> share
          </button>
          <button
            onClick={handleWhatsAppShare}
            className="bg-green-500  mr-5 text-white py-4 px-4 hover:-translate-y-1 hover:opacity-50 duration-200 rounded "
          >
            <FaWhatsapp />
          </button>
          <button
            onClick={handleTwitterShare}
            className="bg-black mr-5 text-white py-4 px-4 hover:-translate-y-1 hover:opacity-50 duration-200 rounded "
          >
            <FaXTwitter />
          </button>
        </div>
        <div
          className={`flex mb-20 justify-center items-center bg-cover bg-no-repeat bg-center rounded-xl  w-[90%] h-[600px] md:h-120 lg:h-[600px] xl:h-[700px] 2xl:h-[800px] relative`}
        >
          <img
            className="w-full h-full object-cover opacity-20 rounded-lg"
            src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
            alt=""
          />
          <div className="absolute top-0 flex flex-col w-full h-full  ">
            <div className="text-center flex justify-center ">
              <p className="bg-gray-700 w-fit  py-2 px-4 text-gray-300 rounded-lg mt-5">
                {movie.vote_average.toFixed(2)} of 10 ({movie.vote_count}{" "}
                reviews){" "}
              </p>
            </div>
            <div className="absolute lg:w-[70%] top-[50%] lg:top-[20%] pl-5 text-left">
              <p className="text-gray-400 flex gap-2 ">
                <span className="flex items-center gap-1">
                  <CiStar />
                  {movie.vote_average.toFixed(1)}
                </span>
                <span>{movie.release_date.slice(0, 4)}</span>
                <span>{movie.runtime} min</span>
              </p>
              <h1 className="text-lg mt-1">{movie.title}</h1>
              <p className="text-sm  lg:text-lg text-gray-400 mt-1">
                {movie.overview}
              </p>
              <p className="text-sm text-gray-400 mt-4">
                Conutry: {movie.production_countries[0]?.name} ,
                {movie.production_countries[1] &&
                  movie.production_countries[1]?.name}
              </p>
              <p className="text-sm  lg:text-lg text-gray-400 mt-4">
                Genre: {movie.genres[0]?.name} ,{" "}
                {movie.genres[1]?.name && movie.genres[1]?.name} ,{" "}
                {movie.genres[2]?.name && movie.genres[2]?.name}
              </p>
              <p className="text-sm  lg:text-lg text-gray-400 mt-4">
                Release: {movie.release_date}
              </p>
              <p className="text-sm  lg:text-lg text-gray-400 mt-4">
                Production: {movie.production_companies[0]?.name} ,{" "}
                {movie.production_companies[1]?.name &&
                  movie.production_companies[1]?.name}{" "}
                ,{" "}
                {movie.production_companies[2]?.name &&
                  movie.production_companies[2]?.name}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="felx justify-center lx:flex-2 p-4 ">
        <h1 className="text-2xl font-bold text-red-600 mb-5">You may like</h1>
        <div className="text-center ">
          {movieSec.map((item, id) => {
            return <MovieSec key={id} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default MovieCate;
