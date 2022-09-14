import React from "react";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";

function Navbar({ productCount }) {
  return (
    <div className="py-6 bg-white ">
      <div className="flex flex-row items-center justify-between max-w-6xl px-5 mx-auto">
        <img
          src="https://cdn.discordapp.com/attachments/998848043967320082/1017353101168103425/logo_red_monkey_3.jpg"
          className="w-28 md:w-36"
        />

        <div className="flex flex-col items-center ">
          <Link
            to="/cart"
            className="text-2xl text-primary-default hover:text-black"
          >
            {" "}
            <BsCart4 />
          </Link>
          <p className="">{productCount}</p>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
