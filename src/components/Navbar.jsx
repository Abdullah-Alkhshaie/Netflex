import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      navigate(`/search/${search}`);
      setSearch("");
    }
  };

  const handleButton = () => {
    navigate(`/search/${search}`);
    setSearch("");
  };

  return (
    <nav className="flex flex-col sm:flex-row justify-between items-center p-4 z-[100] absolute w-full top-0 md:bg-transparent ">
      <div className="flex items-center mb-2 sm:mb-0">
        <Link to={`/`}>
          <h1 className="text-red-600 font-bold text-2xl sm:text-4xl cursor-pointer">
            NETFLEX
          </h1>
        </Link>
      </div>
      <div className="flex items-center mt-2 sm:mt-0">
        <input
          type="text"
          placeholder="Search ..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleSearch}
          className="px-4 py-2 mr-2 bg-transparent border border-red-700 focus:outline-none text-white"
        />
        <button
          onClick={handleButton}
          className="bg-transparent text-red-600 px-4 py-2 rounded"
        >
          Search
        </button>
      </div>
      <div className="flex items-center mt-2 sm:mt-0">
        <Link to="/signIn">
          <button className="text-white pr-4">Sign In</button>
        </Link>
        <Link to="/singUp">
          <button className="bg-red-600 px-2 py-1 text-sm md:text-lg md:px-6 md:py-2 cursor-pointer rounded">
            Sign Up
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
