import React from "react";
import { BsCart4 } from "react-icons/bs";
import { Link, Navigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiX } from "react-icons/hi";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { MdPermIdentity } from "react-icons/md";
import { WithUser } from "./WithProvider";

function Navbar({ productCount, user, setUser }) {
  const [homeMenu, setHomeMenu] = useState(false);

  const logout = () => {
    localStorage.removeItem("token");
    setUser(undefined);
  };

  function handleHomeMenuOpen() {
    setHomeMenu(true);
  }
  function handleHomeMenuClose() {
    setHomeMenu(false);
  }

  return (
    <div className="py-6 bg-white border-b ">
      <nav className="flex flex-row items-center justify-between max-w-6xl px-5 mx-auto">
        <div className="w-24 md:w-36">
          <img
            src="https://cdn.discordapp.com/attachments/998848043967320082/1017353101168103425/logo_red_monkey_3.jpg"
            className="w-full"
          />
        </div>
        <div className="flex flex-col items-center self-center gap-1">
          <div className="flex">
            <MdPermIdentity className="text-3xl " />
            <span className="font-bold">{user.full_name}</span>
          </div>
          <button
            className="px-2 font-semibold bg-red-400 border border-gray-900 rounded-md"
            onClick={logout}
          >
            logout
          </button>
        </div>

        <div className="flex gap-4 md:gap-8">
          <ul className="hidden gap-8 text-xl md:flex">
            <li>
              <Link to="/" className=" hover:text-red-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/" className=" hover:text-red-500">
                All Product
              </Link>
            </li>
            <li>
              <Link to="/" className=" hover:text-red-500">
                About
              </Link>
            </li>
            <li>
              <Link to="/" className=" hover:text-red-500">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/login" className=" hover:text-red-500">
                Account
              </Link>
            </li>
          </ul>
          <Link
            to="/cart"
            className="relative flex items-center hover:cursor-pointer"
          >
            {" "}
            <BsCart4 className="text-3xl text-primary-default hover:text-black" />
            <p className="absolute w-4 h-5 ml-6 text-xl font-semibold mb-7">
              {productCount}
            </p>
          </Link>

          {homeMenu == false && (
            <GiHamburgerMenu
              onClick={handleHomeMenuOpen}
              className="block text-3xl text-primary-default md:hidden hover:text-black"
            />
          )}

          {homeMenu == true && (
            <HiX
              onClick={handleHomeMenuClose}
              className="text-3xl md:hidden text-primary-default hover:text-black"
            />
          )}
        </div>
      </nav>
      {homeMenu == true && <MobileMenu />}
    </div>
  );
}
export default WithUser(Navbar);
