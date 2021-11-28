import React from 'react';
import {useLocation, useHistory} from 'react-router-dom'

function Layout({children}){
let location = useLocation()
let history = useHistory()
        return (
            <div>
            {children}
            {
             !(location.pathname==="/") ? <button  className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4" onClick={()=>
                {
                 history.push({
                    pathname:  "/"
            })
          
       }} >Go to Home </button> : <div></div>
            }
       {  
        <button  className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4" onClick={()=>
            {
             history.goBack()
      
   }} >Go Back </button> 
   }
            </div>
        );
    
}

export default Layout;