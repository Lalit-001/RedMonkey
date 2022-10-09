import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
function Loading() {
  return (
    <div className="flex items-center justify-center gap-3 p-12 text-3xl">
      <div className="animate-spin">
        {" "}
        <AiOutlineLoading3Quarters />
      </div>
      <div>Loading...</div>
    </div>
  );
}
export default Loading;
