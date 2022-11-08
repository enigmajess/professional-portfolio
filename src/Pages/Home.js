import React from "react";
import ProfilePic from "../images/ProfilePic.jpg";
import Highlights from "../Highlights.js";
import "../Pages/Home.css";

export default function Home() {
  return (
    <div className="Container row">
      <div className="col-6  d-flex align-items-center mb-3">
        <img src={ProfilePic} className="profilePic" alt="" />
      </div>
      <div className="col-6">
        <Highlights />
        <div className="aboutMe d-flex flex-column align-items-center mb-3">
          <h3>About Me</h3>
          <p>
            Hello! I'm Jess, nice to meet you! I'm an aspiring software developer
            and a major simulation gameplay fan. My grimmsnallygaster account is
            the best place to keep up with my gameplay content, and Enigma Jess
            for everyday living. Subscribe to my mailing list to stay up to date
            on my latest content.
          </p>
        </div>
      </div>
    </div>
  );
}
