import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      console.log(email);
      console.log(password);
    } else {
      alert("please enter your email and password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-700 ">
      <div className="max-w-md w-full space-y-8 p-6 bg-gray-900 rounded-xl shadow-lg">
        <div className="text-center mt-6 text-3xl font-bold text-gray-300  ">
          <h2>Sign in to your account</h2>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6 ">
          <div className="rounded-md shadow-sm space-y-px">
            <label htmlFor="email" className="sr-only">
              Email adress
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              required
              className=" rounded-none appearance-none required: block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-50  focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email adress"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="rounded-md shadow-sm space-y-px">
            <label htmlFor="password" className="sr-only">
              Password adress
            </label>
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="current-password"
              required
              className=" rounded-none appearance-none required: block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-50  focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="felx items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember-me"
                name="remember-me"
                className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-300"
              >
                Remember me
              </label>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border duration-300 border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>
        </form>
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Don't you have account?
            <Link
              to="/singUp"
              className="font-medium text-red-600 hover:text-red-500"
            >
              Sing Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
