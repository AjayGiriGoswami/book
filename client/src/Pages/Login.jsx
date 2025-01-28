import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-background dark:bg-grey shadow-lg ">
        <div className="max-w-md w-full p-6 bg-card dark:bg-card-foreground rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-primary dark:text-primary-foreground mb-4 text-center">
            Login
          </h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-secondary dark:text-secondary-foreground"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-3 py-2 border border-input rounded-md shadow-sm focus:outline-none focus:ring focus:ring-primary dark:focus:ring-primary-foreground focus:border-primary dark:focus:border-primary-foreground"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-secondary dark:text-secondary-foreground"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 block w-full px-3 py-2 border border-input rounded-md shadow-sm focus:outline-none focus:ring focus:ring-primary dark:focus:ring-primary-foreground focus:border-primary dark:focus:border-primary-foreground"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground p-2 rounded-md hover:bg-primary/80 focus:outline-none focus:ring focus:ring-primary dark:focus:ring-primary-foreground focus:ring-opacity-50"
            >
              Login
            </button>
            <p className="text-sm text-secondary dark:text-secondary-foreground mt-2 text-center">
              Don't have an account?{" "}
              <Link to="/register" className="text-primary hover:underline">
                Create Account Now
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
