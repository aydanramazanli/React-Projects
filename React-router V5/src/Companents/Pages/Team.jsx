import React from 'react'
import {useParams} from "react-router-dom";


function Team() {
  let {name}= useParams()
    return <h2 className="text-2xl text-center"> salam {name}</h2>;
  }


export default Team