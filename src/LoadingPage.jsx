import React from "react";
import { ImSpinner3 } from "react-icons/im";
function Loading() {
  return (
    <div className="flex items-center justify-center p-12 text-6xl  animate-spin text-primary-dark">
      {" "}
      <ImSpinner3 />{" "}
    </div>
  );
}
export default Loading;
