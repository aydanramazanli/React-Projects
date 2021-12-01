import React from 'react'

export default function Movie({img, category}) {
    return (
       <> 
       {/* <div className="py-2">
            <h2 className="text-gray-50 text-2xl font-bold">{category}</h2>
        </div> */}
       
        <div className="w-full h-full" style={{height: '150px'}}> 
        <img src={img} alt="" />
        </div>
     
        </>
    )
}
