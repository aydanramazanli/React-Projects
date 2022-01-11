import React, { useContext, useState, useEffect } from "react";
import "../Css/MovieList.css";
import Movie from "./Movie";
import shortid from "shortid";
// import Detail from "./Detail";
import { MovieData } from "../App";

export default function MovieList() {
  //  const {data}= useContext(MovieData)
  const [info, setInfo] = useState(null);
  const [filmInfos, setFilmInfos] = useState(null);



  const list = async () => { 
   const urls=[`https://api.themoviedb.org/3/list/${8174238}?api_key=579fa79d34e501aae2fefaae5e307ee0&language=en-US`,`https://api.themoviedb.org/3/list/${8174753}?api_key=579fa79d34e501aae2fefaae5e307ee0&language=en-US`]
	 try {
      const popular = await Promise.all(urls.map(e=>fetch(e)))
      const datasPopular = await Promise.all(popular.map(e=>e.json()))
       console.log(datasPopular);
       // mapdan json cixar 
       //https://stackoverflow.com/questions/46241827/fetch-api-requesting-multiple-get-requests
      setFilmInfos(datasPopular);
      const data = datasPopular.items;
      setInfo(data);
    } catch {
      console.log("error data");
    }
  };

  

  useEffect(() => {
    list();
  }, []);

  return (
    <div className="container mx-auto px-4">
      {filmInfos !== null ? (
        <Movie shortid={shortid()} category={filmInfos.name} film={info} />
      ) : null}
    </div>
  );
}
