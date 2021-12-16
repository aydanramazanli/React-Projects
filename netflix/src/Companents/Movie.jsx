import React from "react";
import { Link } from "react-router-dom";
import Carousel from 'react-elastic-carousel';
import "..//Css/MovieList.css";



export default function Movie({ category, movies }) {
  
  return (
    <>
      <div className="py-2">
        <h2 className="text-gray-50 text-2xl font-bold my-3">{category}</h2>
      </div>
  <Carousel>
        <div className="movies z-50 inline-flex flex-nowrap">
       
          {movies?.map((info) => {
            return (
           
              <Link
                to={`film-detail/${info.id}`}
                className="movie-link w-52 gap-5"
              > 
                <div className="movie-item  h-full">
                  <img src={info.img} className="h-full w-full  object-cover" />
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
        </Carousel>
    </>
  );
}
