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

  const list = async () => {
    try {
      Promise.all([
       await fetch(`https://api.themoviedb.org/3/list/${8174238}?api_key=579fa79d34e501aae2fefaae5e307ee0&language=en-US`),
       await fetch(`https://api.themoviedb.org/3/list/${8174753}?api_key=579fa79d34e501aae2fefaae5e307ee0&language=en-US`),
      ])
        .then(function (responses) {
          return Promise.all(
            responses.map(function (response) {
              //obj>json
              return response.json();
            })
          );
        }).then(function (data) { 
           data.map(moviesObj => {
             setCategories(moviesObj)
         
           
           })
          
          return data;
        })
        .catch(function (error) {
          console.log(error);
        });
        //each film datas
       
      setObj(categories.items);
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
  
    {categories!==null?(
       <Movie shortid={shortid()}
       category={categories.name}
       movie={obj} 
       />
    ) :null}
   
   
    </div>
  );
}
