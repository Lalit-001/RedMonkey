import React from 'react';
import { BsLinkedin,BsFacebook,BsTwitter,BsInstagram } from "react-icons/bs";

function Footer(){
  return <div className=" flex flex-col  bg-primary-light ">
   <div className="flex space-x-2 justify-center m-4 ">
    
     <BsLinkedin className="hover:text-primary-dark "/>
     <BsFacebook className="hover:text-primary-dark"/>
     <BsTwitter className="hover:text-primary-dark"/>
     <BsInstagram className="hover:text-primary-dark"/>
</div> 
   <div className="flex flex-col items-center p-4 md:flex-row md:justify-between border border-gray-800 " > 
     <p>copyright © 2022 | RedMonkey</p>
      <p>Powered By RedMonkey</p>
   </div>

        </div>
}
export default Footer ;