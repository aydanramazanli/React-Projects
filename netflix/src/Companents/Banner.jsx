import React,{useState} from "react";
import "../Css/Banner.css";
import shortid from "shortid";
import BannerItem from "../Companents/BannerItem";


export default function Banner() {
const [list, setList]=useState(
  [
    {
      title:"YOU", desc:"The first season follows the story of Joe Goldberg, a bookstore manager in New York, who upon meeting Guinevere Beck, an aspiring writer, becomes infatuated with her. He feeds his toxic obsession using social media and other technology to track her presence and remove obstacles to their romance.",img:"https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABbhAVu_8XArGfZYDHUs-UVBztb6aZZuHrk1PwJlZ7NO_2gxWhc0xqtdMc2Ye9VJ35FjKVuoTBihu0fNPxtq6IGVzwB8V.webp?r=090", link:"https://www.youtube.com/watch?v=xAN1ThhTWsE&t=1s"
    }
  ]
)

  return (
   <div>
       {list.map((i)=><BannerItem key={shortid()} title={i.title} desc={i.desc} link={i.link} img={i.img} />)}
   </div>
  
 
  );
}
