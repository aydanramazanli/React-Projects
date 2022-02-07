import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "..//Css/MovieList.css";
import  Dark from './Context'

const style = {
  width: "1200px",
};

export default function Movie({ movie, category}) {
const [value, setValue] = useState(0);
const [length,setLength] = useState();
const DarkMood=useContext(Dark)

useEffect(() => {
  if(movie) {
    setLength(movie.length);
  }
},[movie])


  const nextSlider=()=>{
    if(value > -((length-(length%4)) * 200)){
      console.log(value);
      setValue(value-parseFloat(style.width.replace(/\D/g,'')))
    }
  }

  const prevSlider=()=>{
    if(value+parseFloat(style.width.replace(/\D/g,'')) <= 0){
      setValue(value+parseFloat(style.width.replace(/\D/g,'')))
    }
  }


  const showMovie = () => {
    if(movie) { 
      return movie.map((info) => {
        return ( 
          <Link 
            to={`film-detail/${info.id}/${info.media_type}`}
            className="movie-link w-64 h-48  mx-1.5"
          >  
            <div className="movie-item h-full">
              <img
                src={`https://image.tmdb.org/t/p/original/${info.poster_path}`}
                alt="movies"
                className="h-full w-full  object-cover"
              />
              <div className="movieInfo absolute bottom-2 left-4 text-gray-50 font-medium  text-sm">
                <h2> Name : {info.title || info.title || info.original_name ||info.original_title}</h2>
                <h3> Time : {info.release_date ||info.first_air_date}</h3>
                <span>Stars: {info.vote_average}</span>
              </div>
            </div>
          </Link>
        );
      });
    }
  };

  return (
    <div className="movies-section">
      <div className=" box-border	overflow-hidden">
        <div className="py-2">
          <h2 className="text-gray-50 text-2xl font-bold my-3" style={DarkMood.dark===true ? {color:"white"}: {color:"black"}  }>{category}</h2>
        </div>
        <div
          style={{
            left: `${value}px`,
          }}
          className="movies inline-flex flex-nowrap relative transition-all	"
        >
          {showMovie()}
        </div>
      </div>
       <div className="buttons">
       <button className="next" onClick={nextSlider}><i className="fas fa-chevron-right text-gray-50"></i></button> 
       <button className="prev" onClick={prevSlider}><i className="fas fa-chevron-left text-gray-50"></i></button> 
      </div> 
    </div>
  );
}
