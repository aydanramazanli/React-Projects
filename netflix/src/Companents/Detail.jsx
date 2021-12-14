import React, { useContext, useEffect, useState } from "react";
import { MovieData } from "../App";
import { useParams } from "react-router-dom";

export default function Detail() {
  const { data } = useContext(MovieData);
  let { id } = useParams();

  const [movieId, setMovieId] = useState();

  useEffect(() => {
    // console.log(data, id)
    for (let i = 0; i < data.length; i++) {
      let findId = data[i].movies.find((w) => w.id === +id); // + to number
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
          <img src={movieId?.img} className=" object-cover" />
        </div>

        <div className="text-gray-50 font-medium w-1/2 px-10 text-sm">
          <h2 className="text-4xl tracking-widest pb-2"> {movieId?.name}</h2>
          <h3 className="text-lg  py-1"> Time : {movieId?.time}</h3>
          <h3 className="text-lg py-1">Duration:{movieId?.duration}</h3> 
          <span className="text-lg py-1">Stars: {movieId?.stars}</span>
          <p className="text-lg py-1">Description: {movieId?.description}</p>
         
        </div>
      </div>
    </div>
  );
}
