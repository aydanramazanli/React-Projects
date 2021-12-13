import React, { useContext,useEffect, useState } from "react";
import { MovieData } from "../App";
import {useParams} from "react-router-dom"

export default function Detail() {
  const { data } = useContext(MovieData);
 let {id}=useParams()
 
const [movieId, setMovieId] = useState()

 useEffect(() => {
     console.log(data, id)
     for(let i=0; i<data.length; i++) {
          let findId=data[i].movies.find(w => w.id === +id)
          if(findId) {
              setMovieId(findId)
              break;
          }
     }
 },[])

  return (
    <div>
    <div className="movie-item">
          <img src={movieId?.img} className="h-full w-full object-cover" />
          <div className="movieInfo  text-gray-50 font-medium  text-sm">
            <h2> Name : {movieId?.name}</h2>
            <p>Description:{movieId?.description}</p>
            <h3> Time : {movieId?.time}</h3>
            <span>Stars: {movieId?.stars}</span>
          </div>
        </div>
    </div>
  );
}
