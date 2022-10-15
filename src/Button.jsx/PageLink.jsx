import React from "react";
import { Link } from "react-router-dom";

const PageLink = (props) => {
  return (
    <Link
      {...props}
      className="px-2 py-2 text-lg font-bold text-center border border-gray-400 hover:text-white hover:bg-red-600"
    />
  );
};

export default PageLink;
