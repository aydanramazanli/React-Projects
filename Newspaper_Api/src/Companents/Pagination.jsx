import React from 'react'
import shortid from "shortid";


export default function Paginations({pageCount, pagination}) {
    console.log(pageCount)
    return (
        
        <div style={{width:'70%', margin:"auto", display:"flex"}}> 
          {
                    Array(Math.ceil(pageCount)).fill(" ").map((number, index) => {
                      
                        return (
                            <li  key={shortid.generate()} style={{listStyle:"none",margin:"0 10px"}} onClick={() => pagination(index + 1)}><button>{index + 1}</button> </li>
                        )
                    })
                }
               

        </div>
        
    )
}
