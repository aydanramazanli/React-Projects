import React, {useState, useEffect} from "react";
import "../Css/MovieList.css";
import Movie from "./Movie";
import SDK from './Sdk'
import shortid from "shortid";




export default function MovieList() {
  const sdk = new SDK();
  const [addData, setAddData]=useState([]);
  const [datas, setDatas]=useState([]) 

  const apiData=async()=>{
  const data=await sdk.getListsFromAccount()
  setAddData(data)
  const lists = data?.results.map(w=>w.id)
  Promise.all(lists.map(w=>sdk.getList(w))).then(w=>{
      setDatas(w)
    })
  }


  useEffect(() => {
    apiData()
  }, []);


  return (
    <div className="container mx-auto px-4">
{datas!==null? 
 datas.map((e) =>
 <Movie  shortid={shortid()}
 movie={e.results} category={e.name} 
 />
)
 :null}  
   
    </div>
  );
}
