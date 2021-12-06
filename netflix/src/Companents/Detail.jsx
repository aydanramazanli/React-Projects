import React from 'react'

export default function Detail({movies}) {
    return (
        <>
{movies.map((info)=>{
    return(
        <div>
              <div className="movie-item">
                      <img src={info.img} className="h-full w-full object-cover" />
                      <div className="movieInfo  text-gray-50 font-medium  text-sm" >
                      <h2> Name : {info.name}</h2>
                      <p>Description: {info.description}</p>
                      <h3> Time : {info.time}</h3>
                      <span>Stars: {info.stars}</span>
                      </div>
               </div>  
        </div>
    )
} )

}
        </>
    )
}
