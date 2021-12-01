import React, {useState}from 'react'
import "../Css/MovieList.css"
import Movie from "./Movie"
import shortid from "shortid"
import pic1 from "../Images/download.jpg"
import pic2 from "../Images/narcos_press_1000.jpg"
import pic3 from "../Images/theWitcher.jpg"
import pic4 from "../Images/things.jpg"


export default function MovieList() {
const [movie, setMovie] = useState( [ 
{img:pic1},
    {img:pic2},
    {img:pic3},
    {img:pic4},
    {img:pic1}])
    return (
        <div className=" px-10 py-6">
           <div className="movies grid grid-cols-5 w-full gap-3">
         {
           movie.map(i=>(<Movie key={shortid()}  img={i.img} />) ) 
         }
         </div>
        </div>
    )
}
