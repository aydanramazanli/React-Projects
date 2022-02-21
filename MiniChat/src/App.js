import React from "react";
import "./App.css";
import Main from "./companents/Main";
import Message from "./companents/Message";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {


  return (
    <div className="App">
      <BrowserRouter>
      {/* navbar */}
        <nav className="flex bg-red-400 justify-around mb-10 p-5 text-neutral-100 font-semibold">
          <Link to="/">
            Player 01
          </Link>
          <Link to="/player02">
            Player 02
          </Link>
        </nav>
      {/* chat  */}
        <Main>
          <Routes>
          <Route path="/" exact element={<Message />} />
          <Route path="/player02" element={<Message  />} />
          </Routes>
        </Main>
      </BrowserRouter>
    </div>
  );
}

export default App;
