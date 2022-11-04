import React from "react";
import "./App.css";
import Navigation from "./Navigation.js";
import Socials from "./Socials.js";
import ProfilePic from "./images/ProfilePic.jpg";
import Highlights from "./Highlights.js";

function App() {
  return (
    <div className="App">
      <Navigation />
      <section className="row">
        <div className="col-6">
          <img src={ProfilePic} className="profilePic" />
        </div>
        <div className="col-6">
          <Highlights />
         <div className="aboutMe d-flex flex-column align-items-center mb-3">
         <h3>About Me</h3>
          <p>
            Hello! Im Jess, nice to meet you! I’m an aspiring software developer
            and a major simulation gameplay fan. My grimmsnallygaster account is
            the best place to keep up with my gameplay content, and Enigma Jess
            for everyday living. Subscribe to my mailing list to stay up to date
            on my latest content.
          </p>
         </div>
        </div>
      </section>
      <footer>
        <Socials />
      </footer>
    </div>
  );
}

export default App;
