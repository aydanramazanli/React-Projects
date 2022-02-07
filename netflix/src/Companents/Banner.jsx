import React,{useState} from "react";
import "../Css/Banner.css";
import shortid from "shortid";
import BannerItem from "../Companents/BannerItem";
import Carousel from 'react-elastic-carousel';


export default function Banner() {
const [list,setList]=useState(
  [
    {
      title:"YOU", desc:"The first season follows the story of Joe Goldberg, a bookstore manager in New York, who upon meeting Guinevere Beck, an aspiring writer, becomes infatuated with her. He feeds his toxic obsession using social media and other technology to track her presence and remove obstacles to their romance.",img:"https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABbhAVu_8XArGfZYDHUs-UVBztb6aZZuHrk1PwJlZ7NO_2gxWhc0xqtdMc2Ye9VJ35FjKVuoTBihu0fNPxtq6IGVzwB8V.webp?r=090", link:"https://www.youtube.com/watch?v=xAN1ThhTWsE&t=1s"
    },
    {
      title:"Dark", desc:"Children start vanishing from the German town of Winden,bringing to light the fractured relationships, double lives, and the dark pasts of four families living there, and unfurling a mystery that spans four generations.", img:"https://occ-0-1722-1723.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABWKGy4K_1_dvtIW7celhWo6bXLMybAQPY7sAzW2aoc6gUizViVh4WXlTfUy-wJF09wIxphPT0fFx-LwBRmcJ9dEZ3HiR.jpg?r=077"
    }, {
      title:"YOU 2", desc:"The first season follows the story of Joe Goldberg, a bookstore manager in New York, who upon meeting Guinevere Beck, an aspiring writer, becomes infatuated with her. He feeds his toxic obsession using social media and other technology to track her presence and remove obstacles to their romance.",img:"https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABbhAVu_8XArGfZYDHUs-UVBztb6aZZuHrk1PwJlZ7NO_2gxWhc0xqtdMc2Ye9VJ35FjKVuoTBihu0fNPxtq6IGVzwB8V.webp?r=090", link:"https://www.youtube.com/watch?v=xAN1ThhTWsE&t=1s"
    },
    {
      title:"Dark 2", desc:"Children start vanishing from the German town of Winden,bringing to light the fractured relationships, double lives, and the dark pasts of four families living there, and unfurling a mystery that spans four generations.", img:"https://occ-0-1722-1723.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABWKGy4K_1_dvtIW7celhWo6bXLMybAQPY7sAzW2aoc6gUizViVh4WXlTfUy-wJF09wIxphPT0fFx-LwBRmcJ9dEZ3HiR.jpg?r=077"
    }
  ]
)

  return (
   <div className="my_carousel">
        <Carousel>
       {list.map((i)=><BannerItem key={shortid()} title={i.title} desc={i.desc} link={i.link} img={i.img} />)}
       </Carousel>
   </div>
  
 
  );
}
