import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./Navigation.js";
import Socials from "./Socials.js";
import Home from "./Pages/Home.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <section className="row">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
          </Routes>
        </section>
        <footer>
          <Socials />
        </footer>
      </div>
    </Router>
  );
}

export default App;
