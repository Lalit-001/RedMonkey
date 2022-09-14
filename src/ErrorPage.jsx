import React from "react";
import {Link } from "react-router-dom";
function Error(){
  return <>
  <div className="bg-white items-center max-w-7xl mx-auto md:p-16 p-8 flex flex-col md:flex-row my-8 md:my-16 gap-4 ">
    <div className=" flex flex-col gap-2 md:gap-6">
<h1 className=" text-primary-default text-5xl md:text-8xl font-bold animate-bounce " >404</h1>
    <h2 className="tracking-tighter font-serif  text-2xl md:text-4xl font-bold animate-bounce ">Page Not Found !</h2>
    <p> ohh!!  man you are totally lost .
      we can't find the page you want. <br></br>
      Hit the home button to explore more. </p>
      <div className="flex gap-4">
      <Link to="/" className="self-start border border-orange-800 bg-primary-default rounded-md px-6 py-1 text-white hover:bg-primary-dark"> Home</Link> 
      <Link to="/" className="self-start border border-orange-800 bg-gray-400 rounded-md px-6 py-1 text-white hover:bg-primary-dark"> Contact Us</Link>
        </div>
      </div>
    <div className="max-w-md ">
    <img className=" w-full aspect-square object-cover" src=" https://cdn.discordapp.com/attachments/998848043967320082/1016610075281985547/404_edit.jpg"/> 
    </div>
    
</div>
</>

}

export default Error ;