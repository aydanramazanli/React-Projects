import React, { useState,useContext} from "react";
import "../Css/MovieList.css";
import Movie from "./Movie";
import shortid from "shortid";
// import Detail from "./Detail";
import {MovieData}  from '../App'




export default function MovieList() {
 const {data}= useContext(MovieData)

console.log(data)
  
return(
 <div className="container mx-auto px-4">

   {
     data.map(i=>(
    
     <Movie key={shortid()} category={i.category} movies={i.movies}/>))
  
   }  


 </div>
)
}
