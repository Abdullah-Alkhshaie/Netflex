import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password && name && confirmPassword) {
      if (password === confirmPassword) {
        console.log(name);
        console.log(email);
        console.log(password);
      } else {
        alert("The password and confirm passwrod do not match ");
      }
    } else {
      alert("The password and confirm passwrod do not match ");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-700 ">
      <div className="max-w-md w-full space-y-8 p-6 bg-gray-900 rounded-xl shadow-lg">
        <div className="text-center mt-6 text-3xl font-bold text-gray-300  ">
          <h2>Create your account</h2>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6 ">
          <div className="rounded-md shadow-sm space-y-px">
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              type="name"
              id="name"
              name="name"
              autoComplete="name"
              required
              className=" rounded-none appearance-none required: block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-50  focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
              Password
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
          <div className="rounded-md shadow-sm space-y-px">
            <label htmlFor="confirmpassword" className="sr-only">
              Confirm password
            </label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              autoComplete="current-confirm-password"
              required
              className=" rounded-none appearance-none required: block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-50  focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white duration-300 bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Akredy have an account?{" "}
            <Link
              to="/signIn"
              className="font-medium text-red-600 hover:text-red-500"
            >
              Sing In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
