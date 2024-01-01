import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MovieCate from "./pages/MovieCate";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import SearchResults from "./components/SearchResults";

function App() {
  return (
    <div className="text-white">
      <Navbar />
      <Routes basename="/Netflex">
        <Route path="/" element={<Home />} />
        <Route path="/movieCate/:id" element={<MovieCate />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/search/:query" element={<SearchResults />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
