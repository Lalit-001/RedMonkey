import React from "react";
import { Link } from "react-router-dom";

function MobileMenu() {
  return (
    <div>
      <ul className="flex flex-col mt-3 md:hidden">
        <Link
          to="/"
          className="px-4 text-base border-t hover:text-red-600 border-y-gray-600"
        >
          Home
        </Link>
        <Link
          to="/"
          className="px-4 text-base border-t hover:text-red-600 border-y-gray-600"
        >
          All Products
        </Link>
        <Link
          to="/"
          className="px-4 text-base border-t hover:text-red-600 border-y-gray-600"
        >
          About
        </Link>
        <Link
          to="/"
          className="px-4 text-base border-t hover:text-red-600 border-y-gray-600"
        >
          Contact
        </Link>
        <Link
          to="/login"
          className="px-4 text-base hover:text-red-600 border-y border-y-gray-600"
        >
          Account
        </Link>
      </ul>
    </div>
  );
}
export default MobileMenu;
