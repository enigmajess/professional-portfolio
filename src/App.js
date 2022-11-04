import React from "react";
import "./App.css";
import Navigation from "./Navigation.js";
import Socials from "./Socials.js";
import ProfilePic from "./images/ProfilePic.jpg";

function App() {
  return (
    <div className="App">
      <Navigation />
      <section>
        <img src={ProfilePic}/>
        {/* <Hightlights /> */}
        <h3>About Me</h3>
        <p>
          Hello! Im Jess, nice to meet you! I’m an aspiring software developer
          and a major simulation gameplay fan. My grimmsnallygaster account is
          the best place to keep up with my gameplay content, and Enigma Jess
          for everyday living. Subscribe to my mailing list to stay up to date
          on my latest content.
        </p>
      </section>
      <footer>
        <Socials />
      </footer>
    </div>
  );
}

export default App;
