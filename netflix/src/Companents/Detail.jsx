import React, {  useEffect, useState } from "react";
//import { MovieData } from "../App";
import { useParams } from "react-router-dom";
import MovieList,{movie} from "./MovieList";
 

export default function Detail(movie) {
  console.log(movie)
  let { id } = useParams();
  const [movieId, setMovieId] = useState();

  useEffect(() => {
    for (let i = 0; i < movie.length; i++) {
      let findId =  movie[i].movies.find((w) => w.id === +id); // + to number
      if (findId) {
        setMovieId(findId);
        break;
      }
    }
  }, []);

 
  return (
    <div>
      <div className="movie-item flex flex-row pt-20 px-20 " style={{height:"87vh"}}>

        <div className="img w-1/2" >
        <img
                src={`https://image.tmdb.org/t/p/original/${movieId.poster_path}`}
                alt="movies"
                className="h-full w-full  object-cover"
              />
        </div>

        <div className="text-gray-50 font-medium w-1/2 px-10 text-sm">
          <h2 className="text-4xl tracking-widest pb-2"> {movieId.title || movieId.title || movieId.original_name ||movieId.original_title}</h2>
          {/* <h3 className="text-lg  py-1"> Time : {movieId?.time}</h3>
          <h3 className="text-lg py-1">Duration:{movieId?.duration}</h3> 
          <span className="text-lg py-1">Stars: {movieId?.stars}</span>
          <p className="text-lg py-1">Description: {movieId?.description}</p> */}
         
        </div>
      </div>
    </div>
  );
}
