import React from 'react'
import {useLocation} from "react-router-dom";

function About() {
  let location=useLocation()
  return(
    <div className="text-2xl text-center">
      {
        !(location.state==="") ?  <div>Bu yazı SPA prinsipinə məxsus olmayan yollarla girilib</div> : <div>Bu yazı link üzrə yaranıb</div>
      }
    </div>
  )
    
  }
    

export default About