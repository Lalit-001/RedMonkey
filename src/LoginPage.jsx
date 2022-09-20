import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
function LoginPage() {
  return (
    <div className="py-8 bg-gray-200 md:p-16">
      <div className="p-6 overflow-hidden bg-white rounded-sm md:p-24">
        <div className="flex flex-col justify-start gap-4 p-4 border border-gray-600 md:flex-row">
          <div className="px-4 ">
            <h2 className="font-serif text-3xl font-bold"> Log In</h2>

            <form className="flex flex-col gap-4 my-3 ">
              <div className="relative flex items-center ">
                <HiOutlineMail className="absolute ml-2 text-xl text-black" />
                <input
                  className="py-2 pl-10 border border-gray-500 rounded-sm ring-gray-400 "
                  placeholder="Email address"
                  type="email"
                  required
                />
              </div>

              <div className="relative flex items-center ">
                <RiLockPasswordLine className="absolute ml-2 text-xl text-black " />
                <input
                  className="py-2 pl-10 border border-gray-500 rounded-sm "
                  placeholder="Password"
                  type="password"
                  required
                />
              </div>
              <button className="self-start px-4 py-1 font-bold bg-red-400 rounded-sm hover:bg-red-600 hover:text-white">
                Log In
              </button>
            </form>
            <Link to="/forget" className="font-semibold text-red-600">
              forget password ?
            </Link>
          </div>
          <div className="flex-col hidden gap-3 px-4 md:flex">
            <h1 className="font-serif text-4xl font-bold">Welcome Mate !!</h1>
            <p className="text-base font-semibold">
              Don't have an account ? Simply create an account by clicking sign
              up button .
            </p>

            <Link
              to="/signUp"
              className="self-start px-4 py-1 font-bold bg-red-400 rounded-sm hover:bg-red-600 hover:text-white"
            >
              Sign Up
            </Link>
          </div>

          <div className="flex flex-col px-4 md:hidden">
            <hr className="my-6 border-gray-600 border-y-1" />
            <p className="text-base font-semibold ">
              Don't have an account ?{" "}
              <Link to="/" className="font-semibold text-red-600 ">
                sign up here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
