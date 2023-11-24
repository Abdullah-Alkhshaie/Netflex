import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 z-[100] absolute w-full   top-0 ">
      <Link to={`/`}>
        <h1 className="text-red-600  font-bold  sm:text-lg md:text-4xl cursor-pointer ">
          NETFLEX
        </h1>
      </Link>
      <div>
        <Link to="/signIn">
          <button className="text-white pr-4 ">Sign In</button>
        </Link>
        <Link to="/singUp">
          <button className="bg-red-600 px-2 py-1 text-sm md:text-lg  md:px-6 md:py-2 cursor-pointer rounded ">
            Sign Up
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
