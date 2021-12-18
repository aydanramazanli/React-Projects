import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "..//Css/MovieList.css";

const style={
  width:"1100px",

}

export default function Movie({ category, movies }) {
const [value, setValue]= useState(0)
let dataLength=movies.Length
console.log(typeof movies)

const nextSlider=()=>{
  if(value !== -(dataLength-1) * style.width){
    setValue(value-style.width)
  }
}

const prevSlider=()=>{
  if(value!==0){
    setValue(value+style.width)
  }
}

  return (
    <div className="movies-section">
      <div className="py-2">
        <h2 className="text-gray-50 text-2xl font-bold my-3">{category}</h2>
      </div>

    
      <div
    
      style={style}
        className="movies inline-flex flex-nowrap w-full relative "
      >
      
        {movies?.map((info) => {
          return (

            <Link
              to={`film-detail/${info.id}`}
              className="movie-link  w-52 gap-5"
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
     <div className="buttons">
       <button className="next" onClick={nextSlider}>Next</button>
       <button className="prev" onClick={prevSlider}>Prev</button>
     </div>
 
    </div>
  );
}
