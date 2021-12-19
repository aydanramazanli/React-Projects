import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "..//Css/MovieList.css";

const style={
  width:"832px",
}

export default function Movie({ category, movies }) {
const [value, setValue]= useState(0)
let dataLength=movies.length



const nextSlider=()=>{
  if(value > -((dataLength-(dataLength%4)) * 208)){
    setValue(value-parseFloat(style.width.replace(/\D/g,'')))
  }
}
  
const prevSlider=()=>{
  if(value+parseFloat(style.width.replace(/\D/g,'')) <= 0){
    setValue(value+parseFloat(style.width.replace(/\D/g,'')))
  }
}

  return (
    <div className="movies-section">
    <div className=" box-border	overflow-hidden">
      <div className="py-2">
        <h2 className="text-gray-50 text-2xl font-bold my-3">{category}</h2>
      </div>
      <div
      style={{
        left: `${value}px`,
      }}

        className="movies inline-flex flex-nowrap relative transition-all	"
      >
      
        {movies?.map((info) => {
          return (

            <Link
              to={`film-detail/${info.id}`}
              className="movie-link w-48 h-48 gap-5 mx-2"
              target="_blank"
            >
              <div className="movie-item h-full">
                <img src={info.img} alt="movies"  className="h-full w-full  object-cover" />
                <div className="movieInfo absolute bottom-2 left-4 text-gray-50 font-medium  text-sm">
                  <h2> Name : {info.name}</h2>
                  <h3> Time : {info.time}</h3>

                  <span>Stars: {info.stars}</span>
                </div>
              </div>
            </Link>
          );
        })}

       
      </div>

 
    </div>
    <div className="buttons">
       <button className="next" onClick={nextSlider}><i class="fas fa-chevron-right text-gray-50"></i></button>
       <button className="prev" onClick={prevSlider}><i class="fas fa-chevron-left text-gray-50"></i></button>
     </div>
    </div>

  );
}
