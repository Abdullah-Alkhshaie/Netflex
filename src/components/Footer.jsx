import React from "react";

function Footer() {
  return (
    <div className="mt-40  flex flex-col w-[90%] text-center mx-auto mb-5">
      <h1 className="text-red-600 font bold text-3xl mb-5">NETFLEX</h1>
      <div className="bg-gray-700 p-10 rounded-lg justify-center text-center">
        <p className="flex  justify-around text-gray-400 mb-4">
          <span>MOVIES</span>
          <span>TV-SHOWS</span>
          <span>TOP IMDB</span>
        </p>
        <p className="text-gray-400 ">
          Your destination for free movie streaming online. Watch movies online
          for free, anytime, anywhere. Explore our vast collection and
          experience cinematic wonders at your fingertips.
        </p>
      </div>
    </div>
  );
}

export default Footer;
