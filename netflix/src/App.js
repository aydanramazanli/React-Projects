import "./App.css";
import Banner from "./Companents/Banner";
import Navbar from "./Companents/Navbar";
import MovieList from "./Companents/MovieList";
import Footer from "./Companents/Footer";
import React, {useState,createContext} from "react";
import Detail from './Companents/Detail'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./Companents/Registration/Register"
//import { MovieData } from "./Companents/Context";



export const MovieData = createContext({})


function App() {
  const [data, setData]=useState(
    [
      { 
        category: "Action", 
        movies:[{
        id:1,
        name:"Dark", 
        duration:" 2 Season",
        description:"A missing child sets four families on a frantic hunt for answers as they unearth a mind-bending mystery that spans three generations.",
        time:"2h 50m",
        img:"https://occ-0-1722-1723.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABWKGy4K_1_dvtIW7celhWo6bXLMybAQPY7sAzW2aoc6gUizViVh4WXlTfUy-wJF09wIxphPT0fFx-LwBRmcJ9dEZ3HiR.jpg?r=077",
        stars:"5 star"
      },
      {
        id:1,
        name:"Dark", 
        duration:" 2 Season",
        description:"A missing child sets four families on a frantic hunt for answers as they unearth a mind-bending mystery that spans three generations.",
        time:"2h 50m",
        img:"https://occ-0-1722-1723.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABWKGy4K_1_dvtIW7celhWo6bXLMybAQPY7sAzW2aoc6gUizViVh4WXlTfUy-wJF09wIxphPT0fFx-LwBRmcJ9dEZ3HiR.jpg?r=077",
        stars:"5 star"
      },
      {
        id:1,
        name:"Dark", 
        duration:" 2 Season",
        description:"A missing child sets four families on a frantic hunt for answers as they unearth a mind-bending mystery that spans three generations.",
        time:"2h 50m",
        img:"https://occ-0-1722-1723.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABWKGy4K_1_dvtIW7celhWo6bXLMybAQPY7sAzW2aoc6gUizViVh4WXlTfUy-wJF09wIxphPT0fFx-LwBRmcJ9dEZ3HiR.jpg?r=077",
        stars:"5 star"
      },
      {
        id:2,
        name:"Stranger Things", 
        duration:" 2 Season",
        description:"A missing child sets four families on a frantic hunt for answers as they unearth a mind-bending mystery that spans three generations.",
        time:"2h 15m",
        img:"https://occ-0-1722-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRCPes-ttMtVu0rnEWOa7hszdNY6jJMjBG0dVXNdbWBSBmFdFK9MQZpyv6di8ASdo9brbIU0U1vPFR_juVFfZfw5APcCwErP60M_q5GekUDkpcfe6mjN7nnqoQ7yCQ.jpg?r=dcb",
        stars:"4.5 star"
      },
      {
        id:3,
        name:"Narcos", 
        duration:" 2 Season",
        description:"A missing child sets four families on a frantic hunt for answers as they unearth a mind-bending mystery that spans three generations.",
        time:"1h 45m",
        img:"https://www.nme.com/wp-content/uploads/2017/09/narcos_press_1000.jpg",
        stars:"5 star"
      },
      {
        id:4,
        name:"Breaking Bad",
        duration:" 2 Season", 
        description:"A missing child sets four families on a frantic hunt for answers as they unearth a mind-bending mystery that spans three generations.",
        time:"1h 45m",
        img:"https://www.cnet.com/a/img/X0ca14TIP9jQOQkayXvRlDZQ4jY=/1200x675/2014/06/17/60301c27-9d37-485d-91b9-cc6025e89760/breaking-bad-header.jpg",
        stars:"5 star"
      },
      {
        id:5,
        name:"Venom", 
        duration:" 2 Season",
        description:"A missing child sets four families on a frantic hunt for answers as they unearth a mind-bending mystery that spans three generations.",
        time:"1h 10m",
        img:"https://assets.whatsnewonnetflix.com/external_assets/sggkh+%5B%5Blxx*9*141*8276_8_muochl_mvg%5Bwmn%5Bzkr%5Be3%5BC805vQhtDYWV7zJyzMwnXCTFK*B%5BZZZZYxhRKh7gqUA%5DncKrbnzp8bTCx0AnNnvn7AUC61*wpqePdEMJijISInLlou9Cwr28a4ig0a79pJUxlVQOaTUEJPgRpMd.jpg",
        stars:"5 star"
      }
      ]},
      { category: "Only Netflix", 
      movies:[{
        id:6,
        name:"La Casa De Papel", 
        duration:" 2 Season",
        description:"A missing child sets four families on a frantic hunt for answers as they unearth a mind-bending mystery that spans three generations.",
        time:"2h 50m",
        img:"https://www.egypttoday.com/siteimages/Larg/202109041254135413.jpg",
        stars:"5 star"
      },
      {
        id:7,
        name:"Black Mirror", 
        duration:" 2 Season",
        description:"A missing child sets four families on a frantic hunt for answers as they unearth a mind-bending mystery that spans three generations.",
        time:"2h 15m",
        img:"https://www.thedigitalfix.com/wp-content/uploads/2021/10/black-mirror-season-6.jpg",
        stars:"4.5 star"
      },
      {
        id:8,
        name:"Lucifer", 
        duration:" 3 Season",
        description:"A missing child sets four families on a frantic hunt for answers as they unearth a mind-bending mystery that spans three generations.",
        time:"1h 45m",
        img:"https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5d30c8e5eab9270008f9bd2a%2FCasa-de-Papel-3%2F960x0.jpg%3Ffit%3Dscale",
        stars:"5 star"
      },
   {
    id:9, 
        name:"Locke and Key",
        duration:" 3 Season", 
        description:"A missing child sets four families on a frantic hunt for answers as they unearth a mind-bending mystery that spans three generations.",
        time:"1h 45m",
        img:"https://cdn.vox-cdn.com/thumbor/4ZWtFHeHa5q9piBspAL-E8mFPXM=/0x0:3600x2400/1400x1050/filters:focal(1600x744:2176x1320):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/66273498/LOCKE_105_Unit_00323R2C3.0.jpg",
        stars:"5 star"
      },
    
      ]},
      { category: "Documentary", 
      movies:[{
        id:10, 
        duration:" 3 Season",
        name:"Love and Death", 
        description:"A missing child sets four families on a frantic hunt for answers as they unearth a mind-bending mystery that spans three generations.",
        time:"2h 50m",
        img:"https://upload.wikimedia.org/wikipedia/en/f/fe/Love%2C_Death_%2B_Robots_logo.png",
        stars:"5 star"
      },
      {
        id:11, 
        name:"Lupin", 
        duration:" 3 Season",
        description:"A missing child sets four families on a frantic hunt for answers as they unearth a mind-bending mystery that spans three generations.",
        time:"2h 15m",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Mhuq7yJsvf6HojQn4lCDGZOWaVChlPm7JQ&usqp=CAU",
        stars:"4.5 star"
      },
    
      ]}
    ]
  )
  return (
    <MovieData.Provider value={{data, setData}}>
    <div className="app" style={{ backgroundColor: "#141414" }}> 
      <Router>
        <Navbar />     
        <Switch>
          <Route path="/" exact>
            <Banner />
            <MovieList />
          </Route>
          <Route path="/registeration" exact>
            <Register />
          </Route>
          <Route path="/film-detail/:id">
             <Detail /> 
          </Route> 
        </Switch>
        <Footer />
      </Router>
    
    </div>
    </MovieData.Provider>
  );
}

export default App;
