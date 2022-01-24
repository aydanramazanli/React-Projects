import "./App.css";
import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SDK from "./Sdk";
import Banner from "./Companents/Banner";
import Navbar from "./Companents/Navbar";
import MovieList from "./Companents/MovieList";
import Footer from "./Companents/Footer";
import { DarkModeProvider } from "./Companents/Context";
import Detail from "./Companents/Detail";
import Register from "./Companents/Registration/Register";
export const MovieData = createContext({});

function App() {
  const [dark, setDark] = useState(false);
  const Sdk = new SDK();

  return (
    <Router>
      <DarkModeProvider
        value={{
          dark,
          setDark,
        }}
      >
        <div
          style={
            dark
              ? { backgroundColor: "#000", color: "#fff" }
              : { backgroundColor: "#fff", color: "#000" }
          }
        >
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
        </div>
      </DarkModeProvider>
    </Router>
  );
}

export default App;
