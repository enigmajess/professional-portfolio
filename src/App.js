import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./Navigation.js";
import Socials from "./Socials.js";
import Home from "./Pages/Home.js";
import Contact from "./Pages/Contact.js";
import Blog from "./Pages/Blog.js";
import Projects from "./Pages/Projects.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <section className="row">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="/projects" element={<Projects />}></Route>

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
