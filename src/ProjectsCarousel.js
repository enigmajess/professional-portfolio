import React from "react";
import Carousel from "react-bootstrap/Carousel";
import SourdoughLandingPage from "./images/SourdoughLandingPage.png";
import JsWeatherApp from "./images/JsWeatherApp.png";
import ReactWeatherApp from "./images/ReactWeatherApp.png";
import ReactDictionary from "./images/ReactDictionary.png";
import "./ProjectsCarousel.css";

function ProjectsCarousel() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          src={SourdoughLandingPage}
          className="SourdoughLandingPage d-block w-100 h-400"
          alt=" "
        />
        <h3>SourdoughLandingPage | HTML,CSS, and Vanilla Javascript</h3>
        <p>
          Vanilla landing page made purely with HTML & CSS. The page includes
          clickable links and alerts.
        </p>
        <div className="d-flex p-2 justify-content-evenly">
          <a
            href="https://beautiful-dragon-d1a284.netlify.app/cookinglandingpage.html"
            target="_blank"
            rel="noreferrer"
            className="btn btn-light "
          >
            Demo
          </a>
          <a
            href="https://github.com/enigmajess/weatherapp"
            target="_blank"
            rel="noreferrer"
            className="btn btn-light"
          >
            Source Code
          </a>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          src={JsWeatherApp}
          className="JsWeatherApp d-block w-100 h-400"
          alt=" "
        />
        <h3>JS Weather App | HTML,CSS, and Vanilla Javascript </h3>
        <p>
          Simple weather app utilising HTML5, CSS, Bootstrap, and Javascript.
          This app pulls in live data from open weather API.
        </p>
        <div className="d-flex p-2 justify-content-evenly">
          <a
            href="https://angry-hypatia-af036c.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-light"
          >
            Demo
          </a>
          <a
            href="https://github.com/enigmajess/landing-page"
            target="_blank"
            rel="noreferrer"
            className="btn btn-light"
          >
            Source Code
          </a>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          src={ReactDictionary}
          className="ReactDictionary d-block w-100 h-400"
          alt=" "
        />
        <h3>React Dictionary | HTML,CSS, & JS React</h3>
        <p>
          Dictionary app created with react. This dictionary gives phonetic
          sound examples, different definitions, synonyms, sentence examples,
          and photos.
        </p>
        <div className="d-flex p-2 justify-content-evenly">
          <a
            href="https://visionary-granita-bf948b.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-light d-flex p-2"
          >
            Demo
          </a>
          <a
            href="https://github.com/enigmajess/react-dictionary"
            target="_blank"
            rel="noreferrer"
            className="btn btn-light d-flex p-2"
          >
            Source Code
          </a>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={ReactWeatherApp}
          className="ReactWeatherApp d-block w-100 h-400"
          alt=" "
        />
        <h3>React Weather App | HTML,CSS,& JS React </h3>
        <p>
          Weather app re-created utilising react. This project uses an api from
          SheCodes
        </p>
        <div className="d-flex p-2 justify-content-evenly">
          <a
            href="https://scintillating-gumption-2d9268.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-light d-flex p-2"
          >
            Demo
          </a>
          <a
            href="https://github.com/enigmajess/weather-react"
            target="_blank"
            rel="noreferrer"
            className="btn btn-light d-flex p-2"
          >
            Source Code
          </a>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default ProjectsCarousel;
