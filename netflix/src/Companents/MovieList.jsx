import React, { useContext, useState, useEffect } from "react";
import "../Css/MovieList.css";
import Movie from "./Movie";
import shortid from "shortid";
// import Detail from "./Detail";
import { MovieData } from "../App";

export default function MovieList() {
  //  const {data}= useContext(MovieData)
  const [obj, setObj] = useState(null);
  const [categories, setCategories] = useState(null);

  const list = () => {
    try {
      Promise.all([
     fetch(`https://api.themoviedb.org/3/list/${8174238}?api_key=579fa79d34e501aae2fefaae5e307ee0&language=en-US`),
       fetch(`https://api.themoviedb.org/3/list/${8174753}?api_key=579fa79d34e501aae2fefaae5e307ee0&language=en-US`),
      ])
        .then(function (responses) {
          return Promise.all(
            responses.map(function (response) {
              //obj>json
              return response.json();
            })
          );
        }).then(function (data) { 
          setCategories(data)
          console.log(data);
          return data;
        })
        .catch(function (error) {
          console.log(error);
        });
       
    } catch {
      //try -catch
      console.log("error data");
    }
  };



  useEffect(() => {
    list();
  }, []);



  return (
    <div className="container mx-auto px-4">
  
     {categories!==null? 
 categories.map((data) =>
 <Movie  shortid={shortid} movie={data.items} category={data.name}/>
)
 :null} 
   
   
    </div>
  );
}
