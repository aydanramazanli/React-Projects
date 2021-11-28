import React,{useState} from 'react'
import './App.css';
import Home from './Companents/Pages/Home'
import About from './Companents/Pages/About'
import Team from './Companents/Pages/Team'
import Navbar from './Companents/Navbar';
import Layout from './Companents/Layout'
import {DarkModeProvider} from './Companents/Context'

import {
 BrowserRouter as Router,
 Switch,
  Route
} from "react-router-dom";


function App() {
  const [Dark, SetDark]= useState(false)

  return (
  <Router>
    <DarkModeProvider value={{
      Dark,
      SetDark,
 }}>
    <div style={
      Dark
       ?{ backgroundColor:"#000", color:"#fff"}
       :{ backgroundColor:"#fff", color:"#000"}
    }>
    <Navbar/>
    <Layout>
      <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/team/:name" >
            <Team />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
        </Layout>
        </div>
        </DarkModeProvider>
  </Router>

  );



}

export default App;
