import React from "react";
import "../Css/Banner.css";


export default function Banner() {
  return (
   
      <div className="relative z-0 banner-img w-full h-40" >
        <div className="overlay"></div>
      
      <div className="detail flex flex-col justify-center  h-full p-16">
       <h2 className="text-5xl text-white font-bold my-4 "  >YOU</h2>
          <p className="text-white font-bold my-2 text-xl">The first season follows the story of Joe Goldberg, a bookstore manager in New York, who upon meeting Guinevere Beck, an aspiring writer, becomes infatuated with her. He feeds his toxic obsession using social media and other technology to track her presence and remove obstacles to their romance</p>
          <div className="buttons flex justify-between w-80 my-4">
          <div className="fragman px-4 py-2 bg-white rounded font-bold items-center">
          <i class="fas fa-play mx-2"></i>
         <a href="https://www.youtube.com/watch?v=xAN1ThhTWsE" target="_blank" >Play Trailer</a>
          </div>
          <div className="movie-details flex items-center px-4 py-2 bg-gray-300 bg-opacity-40 rounded font-bold">
          <i class="fas fa-exclamation-circle mx-2 text-white"></i>
              <h3 className="text-white text-lg">More details</h3>
          </div>
      </div>
      </div>
  
    </div>
 
  );
}
