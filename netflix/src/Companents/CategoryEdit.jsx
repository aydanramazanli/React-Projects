import React,{useRef, useContext} from 'react'
import Dark from './Context'

export default function CategoryEdit() {
    const DarkMood= useContext(Dark)
    const inputRef= useRef(null)
    return (
        <div style={{height:"87vh"}} className="flex justify-center items-center">
    <div className="w-72 ">
    <form action="" >
        <div className="flex flex-col ">
            <label className="my-3 mx-auto font-medium text-xl"> New Name</label>
            <input ref={inputRef} type="text" placeholder="Edit name" 
             className="p-2 rounded outline-none text-gray-800 font-semibold"
             style={ DarkMood.dark===false? {background:"black"}:{background:"white"}} />
        </div>
        <div>
            
            <button className="bg-red-600 p-2 rounded outline-none my-3 mx-auto w-full" >Edit Name</button>
        </div>
    </form>
    </div>
        </div>
      
  )
}
