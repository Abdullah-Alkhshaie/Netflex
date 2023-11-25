import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MovieCate from "./pages/MovieCate";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="text-white ">
      <Navbar />
      <Routes>
        <Route path="/" component={<Home />} />
        <Route path="/movieCate/:id" component={<MovieCate />} />
        <Route path="/signIn" component={<SignIn />} />
        <Route path="/singUp" component={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
