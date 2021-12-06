import React from 'react'
import {Link} from "react-router-dom"

export default function Step4({name,planName}) {
    return (
        <div style={{height:"87vh", width:"650px"}} className="text-white flex justify-center  flex-col font-bold m-auto">
        <h2 className="text-2xl">Congratulations,<span className="text-red-600">{name}</span>!</h2>
        <h2 className="text-2xl my-2">You've registered for the  <span className="text-red-600">{planName}</span> plan,</h2>
        <h2 className="text-2xl">but don't worry, we wont charge you until your trials up.</h2>
        <button className="text-xl my-2 py-1 px-4 bg-red-600 rounded">
            <Link to="/">
            start browsing</Link>
          </button>
        </div>
    )
}
