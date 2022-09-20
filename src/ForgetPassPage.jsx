import React from "react";
import { Link } from "react-router-dom";

function ForgetPassPage() {
  return (
    <div className="py-6 bg-gray-200 md:p-16">
      <div className="flex flex-col items-start p-8 bg-white md:p-20">
        <p>
          Lost your password? Please enter your Mobile number or email address.
          You will receive a link to create a new password via email.
        </p>
        <form className="flex flex-col gap-2 mt-8">
          <label htmlFor="inputForget " className="font-semibold">
            Mobile Number or Email
          </label>
          <input
            id="inputForget"
            className="self-start px-4 py-1 border border-gray-600 rounded-sm"
            placeholder="Email or Mobile"
          />
          <div className="flex gap-8">
            <button className="self-start px-4 py-1 mt-4 bg-red-400 border border-gray-600 rounded-sm hover:bg-red-600 hover:text-white">
              Reset password
            </button>
            <Link
              to="/Login"
              className="self-start px-4 py-1 mt-4 bg-red-400 border border-gray-600 rounded-sm hover:bg-red-600 hover:text-white"
            >
              Log In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
export default ForgetPassPage;
