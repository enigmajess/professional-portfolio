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
      </Carousel.Item>
    </Carousel>
  );
}

export default ProjectsCarousel;
