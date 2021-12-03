import "./App.css";
import Banner from "./Companents/Banner";
import Navbar from "./Companents/Navbar";
import MovieList from "./Companents/MovieList";
import Footer from "./Companents/Footer";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./Companents/Registration/Register"
import Detail from "./Companents/Detail";

function App() {
  return (
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
          <Route path="/:name/:id">
            <Detail />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
