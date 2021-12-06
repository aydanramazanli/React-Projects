import React, { useState } from "react";
import "../Css/MovieList.css";
import Movie from "./Movie";
import shortid from "shortid";
import Detail from "./Detail";

export default function MovieList() {
  const [data, setData] = useState([{ category: "Action", 
  movies:[{
    name:"Dark", 
    description:"A missing child sets four families on a frantic hunt for answers as they unearth a mind-bending mystery that spans three generations.",
    time:"2h 50m",
    img:"https://occ-0-1722-1723.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABWKGy4K_1_dvtIW7celhWo6bXLMybAQPY7sAzW2aoc6gUizViVh4WXlTfUy-wJF09wIxphPT0fFx-LwBRmcJ9dEZ3HiR.jpg?r=077",
    stars:"5 star"
  },
  {
    name:"Stranger Things", 
    description:"...",
    time:"2h 15m",
    img:"https://occ-0-1722-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRCPes-ttMtVu0rnEWOa7hszdNY6jJMjBG0dVXNdbWBSBmFdFK9MQZpyv6di8ASdo9brbIU0U1vPFR_juVFfZfw5APcCwErP60M_q5GekUDkpcfe6mjN7nnqoQ7yCQ.jpg?r=dcb",
    stars:"4.5 star"
  },
  {
    name:"Narcos", 
    description:"...",
    time:"1h 45m",
    img:"https://www.nme.com/wp-content/uploads/2017/09/narcos_press_1000.jpg",
    stars:"5 star"
  },
  {
    name:"Breaking Bad", 
    description:"...",
    time:"1h 45m",
    img:"https://www.cnet.com/a/img/X0ca14TIP9jQOQkayXvRlDZQ4jY=/1200x675/2014/06/17/60301c27-9d37-485d-91b9-cc6025e89760/breaking-bad-header.jpg",
    stars:"5 star"
  },
  {
    name:"Venom", 
    description:"...",
    time:"1h 10m",
    img:"https://assets.whatsnewonnetflix.com/external_assets/sggkh+%5B%5Blxx*9*141*8276_8_muochl_mvg%5Bwmn%5Bzkr%5Be3%5BC805vQhtDYWV7zJyzMwnXCTFK*B%5BZZZZYxhRKh7gqUA%5DncKrbnzp8bTCx0AnNnvn7AUC61*wpqePdEMJijISInLlou9Cwr28a4ig0a79pJUxlVQOaTUEJPgRpMd.jpg",
    stars:"5 star"
  }
  ]},
  { category: "Only Netflix", 
  movies:[{
    name:"Dark", 
    description:"A missing child sets four families on a frantic hunt for answers as they unearth a mind-bending mystery that spans three generations.",
    time:"2h 50m",
    img:"https://occ-0-1722-1723.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABWKGy4K_1_dvtIW7celhWo6bXLMybAQPY7sAzW2aoc6gUizViVh4WXlTfUy-wJF09wIxphPT0fFx-LwBRmcJ9dEZ3HiR.jpg?r=077",
    stars:"5 star"
  },
  {
    name:"Stranger Things", 
    description:"...",
    time:"2h 15m",
    img:"https://occ-0-1722-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRCPes-ttMtVu0rnEWOa7hszdNY6jJMjBG0dVXNdbWBSBmFdFK9MQZpyv6di8ASdo9brbIU0U1vPFR_juVFfZfw5APcCwErP60M_q5GekUDkpcfe6mjN7nnqoQ7yCQ.jpg?r=dcb",
    stars:"4.5 star"
  },
  {
    name:"Narcos", 
    description:"...",
    time:"1h 45m",
    img:"https://www.nme.com/wp-content/uploads/2017/09/narcos_press_1000.jpg",
    stars:"5 star"
  },
  {
    name:"Breaking Bad", 
    description:"...",
    time:"1h 45m",
    img:"https://www.cnet.com/a/img/X0ca14TIP9jQOQkayXvRlDZQ4jY=/1200x675/2014/06/17/60301c27-9d37-485d-91b9-cc6025e89760/breaking-bad-header.jpg",
    stars:"5 star"
  },
  {
    name:"Venom", 
    description:"...",
    time:"1h 10m",
    img:"https://assets.whatsnewonnetflix.com/external_assets/sggkh+%5B%5Blxx*9*141*8276_8_muochl_mvg%5Bwmn%5Bzkr%5Be3%5BC805vQhtDYWV7zJyzMwnXCTFK*B%5BZZZZYxhRKh7gqUA%5DncKrbnzp8bTCx0AnNnvn7AUC61*wpqePdEMJijISInLlou9Cwr28a4ig0a79pJUxlVQOaTUEJPgRpMd.jpg",
    stars:"5 star"
  }
  ]},
  { category: "Documentary", 
  movies:[{
    name:"Dark", 
    description:"A missing child sets four families on a frantic hunt for answers as they unearth a mind-bending mystery that spans three generations.",
    time:"2h 50m",
    img:"https://occ-0-1722-1723.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABWKGy4K_1_dvtIW7celhWo6bXLMybAQPY7sAzW2aoc6gUizViVh4WXlTfUy-wJF09wIxphPT0fFx-LwBRmcJ9dEZ3HiR.jpg?r=077",
    stars:"5 star"
  },
  {
    name:"Stranger Things", 
    description:"...",
    time:"2h 15m",
    img:"https://occ-0-1722-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRCPes-ttMtVu0rnEWOa7hszdNY6jJMjBG0dVXNdbWBSBmFdFK9MQZpyv6di8ASdo9brbIU0U1vPFR_juVFfZfw5APcCwErP60M_q5GekUDkpcfe6mjN7nnqoQ7yCQ.jpg?r=dcb",
    stars:"4.5 star"
  },
  {
    name:"Narcos", 
    description:"...",
    time:"1h 45m",
    img:"https://www.nme.com/wp-content/uploads/2017/09/narcos_press_1000.jpg",
    stars:"5 star"
  },
  {
    name:"Breaking Bad", 
    description:"...",
    time:"1h 45m",
    img:"https://www.cnet.com/a/img/X0ca14TIP9jQOQkayXvRlDZQ4jY=/1200x675/2014/06/17/60301c27-9d37-485d-91b9-cc6025e89760/breaking-bad-header.jpg",
    stars:"5 star"
  },
  {
    name:"Venom", 
    description:"...",
    time:"1h 10m",
    img:"https://assets.whatsnewonnetflix.com/external_assets/sggkh+%5B%5Blxx*9*141*8276_8_muochl_mvg%5Bwmn%5Bzkr%5Be3%5BC805vQhtDYWV7zJyzMwnXCTFK*B%5BZZZZYxhRKh7gqUA%5DncKrbnzp8bTCx0AnNnvn7AUC61*wpqePdEMJijISInLlou9Cwr28a4ig0a79pJUxlVQOaTUEJPgRpMd.jpg",
    stars:"5 star"
  }
  ]}
]);

return(
 <div className="container mx-auto px-4">
   {
     data.map(i=>(<Movie key={shortid()} category={i.category} movies={i.movies}/>))
   }
    

 </div>
)
}
