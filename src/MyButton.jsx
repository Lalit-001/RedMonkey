import React from "react";

function MyButton({ content }) {
  return (
    <button className="px-2 text-black bg-red-500 rounded-md hover:bg-red-800 hover:text-white">
      {content}
    </button>
  );
}
export default MyButton;
