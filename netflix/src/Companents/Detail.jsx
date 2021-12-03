import React from 'react'

export default function Detail({movies}) {
    return (
        <div>
             <>
    <div className=" movies  grid grid-cols-5 w-full gap-3" style={{ height: "150px" }}>
       {movies.map((info)=>{
         
           return (
               <div className="movie-item relative">
                      <img src={info.img} className="h-full w-full object-cover" />
                      <div className="movieInfo absolute bottom-2 left-4 text-gray-50 font-medium" >
                      <h2> Name : {info.name}</h2>
                      <h3> Time : {info.time}</h3>
                      <span>Stars: {info.stars}</span>
                      </div>
               </div>  
           )
       } )}
    </div>
    </>
        </div>
    )
}
