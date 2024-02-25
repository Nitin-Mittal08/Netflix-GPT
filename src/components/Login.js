import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="background"
          className="absolute"
        />
      </div>
      <form className="absolute px-10 py-8 bg-black bg-opacity-75 w-4/12 my-24 mx-auto right-0 left-0 text-white">
        <p className="text-white text-3xl m-4 mx-2 font-semibold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </p>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 m-2 w-11/12 rounded-sm bg-[#333333]"
          />
        )}
        <input
          type="text"
          placeholder="Email or phone Number"
          className="p-3 m-2 w-11/12 rounded-sm bg-[#333333]"
        />

        <input
          type="password"
          placeholder="Password"
          className="p-3 m-2 w-11/12 rounded-sm bg-[#333333]"
        />
        <button className="p-2 m-2 py-3 mt-8 rounded-sm text-white bg-[#E50815] w-11/12">
          {isSignInForm ? " Sign In" : "Sign Up"}
        </button>
        <p className="py-4 m-2">
          {isSignInForm ? (
            <>
              <span className="text-slate-500">New to Netflix? </span>
              <span onClick={toggleSignInForm} className="cursor-pointer">
                Sign up now.
              </span>
            </>
          ) : (
            <>
              <span className="text-slate-500">Already a user. </span>
              <span onClick={toggleSignInForm} className="cursor-pointer">
                Sign in now.
              </span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
