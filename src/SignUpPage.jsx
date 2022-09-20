import React from "react";
import { ImGift } from "react-icons/im";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { MdPermIdentity } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

function SignUpPage() {
  return (
    <div className="py-8 bg-gray-200 md:p-24">
      <div className="flex flex-col items-center px-8 py-12 overflow-hidden bg-white">
        <h1 className="mb-8 font-serif text-3xl font-bold"> Sign Up </h1>
        <div className="flex justify-center gap-4 p-8 border border-gray-500">
          <div className="hidden max-w-sm rounded-md md:block ">
            <img
              className="w-full"
              src="https://cdn.discordapp.com/attachments/998848043967320082/1021660829575299112/signup-ss-crop.jpg"
            />
          </div>
          <form className="flex flex-col items-start justify-start gap-3 px-4 rounded-md">
            <div className="relative flex items-center ">
              <MdPermIdentity className="absolute ml-2 text-xl text-black " />
              <input
                className="py-2 pl-10 border border-gray-500 rounded-sm focus:ring-gray-600 "
                placeholder="Name "
                type="text"
                required
              />
            </div>
            <div className="relative flex items-center ">
              <BsTelephone className="absolute ml-2 text-xl text-black " />
              <input
                className="py-2 pl-10 border border-gray-500 rounded-sm focus:ring-gray-600 "
                placeholder="Mobile Number"
                type="tel"
                required
              />
            </div>
            <div className="relative flex items-center ">
              <HiOutlineMail className="absolute ml-2 text-xl text-black " />
              <input
                className="py-2 pl-10 border border-gray-500 rounded-sm focus:ring-gray-600 "
                placeholder="Email address"
                type="email"
                required
              />
            </div>
            <div className="relative flex items-center ">
              <RiLockPasswordLine className="absolute ml-2 text-xl text-black " />
              <input
                className="py-2 pl-10 border border-gray-500 rounded-sm focus:ring-gray-600 "
                placeholder="Create password"
                type="password"
                required
              />
            </div>
            <div className="relative flex items-center ">
              <RiLockPasswordLine className="absolute ml-2 text-xl text-black " />
              <input
                className="py-2 pl-10 border border-gray-500 rounded-sm focus:ring-gray-600 "
                placeholder="Confirm password"
                type="password"
                required
              />
            </div>
            <button className="p-2 font-bold bg-red-500 rounded-sm font-bol mt-7 hover:bg-red-800 hover:text-white">
              Sign up now
            </button>
            <div className="flex gap-2 ">
              <p>Already a member ?</p>
              <Link
                to="/login"
                className="font-bold text-red-500 hover:cursor-pointer"
              >
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default SignUpPage;
