import React from "react";
import SourdoughLandingPage from "../images/SourdoughLandingPage.png";
import JsWeatherApp from "../images/JsWeatherApp.png";
import ReactWeatherApp from "../images/ReactWeatherApp.png"

const Projects = () => {
    return (
        <div className="Projects">
            <div className="row">
                <div className="col-3">
                    <h3>Landing Page</h3>
                    <h4>HTML & CSS</h4>
                    <img src={SourdoughLandingPage} className="SourdoughLandingPage" alt=""/>
                    <p>Basiclanding page made purely with HTML & CSS. The page includes clickable links and alerts.</p>
                    <a href="https://beautiful-dragon-d1a284.netlify.app/cookinglandingpage.html" target="_blank" rel="noreferrer" className="btn btn-light">Demo</a>
                    <a href="https://github.com/enigmajess/landing-page" target="_blank" rel="noreferrer" className="btn btn-light">Source Code</a>

                </div>
                <div className="col-3">
                    <h3>JS Weather App</h3>
                    <h4>HTML,CSS, and Vanilla Javascript</h4>
                    <img src={JsWeatherApp} className="JsWeatherApp" alt=""/>
                    <p>Simple weather app utilising HTML5, CSS, Bootstrap, and Javascript. This app pulls in live data from open weather API.</p>
                    <a href="https://angry-hypatia-af036c.netlify.app/" target="_blank" rel="noreferrer" className="btn btn-light">Demo</a>
                    <a href="https://github.com/enigmajess/weatherapp" target="_blank" rel="noreferrer" className="btn btn-light">Source Code</a>
                </div>
                <div className="col-3">
                    <h3>Landing Page</h3>
                    <h4>HTML & CSS</h4>
                    <img src={SourdoughLandingPage} className="SourdoughLandingPage" alt=""/>
                    <p>Vanilla landing page made purely with HTML & CSS. The page includes clickable links and alerts.</p>
                    <button>Demo</button>
                    <button>Source Code</button>
                </div>
                
            </div>
            <div className="row">
                <div className="col-3">
                    <h3>Landing Page</h3>
                    <h4>HTML & CSS</h4>
                    <img src={SourdoughLandingPage} className="SourdoughLandingPage" alt=""/>
                    <p>Vanilla landing page made purely with HTML & CSS. The page includes clickable links and alerts.</p>
                    <button>Demo</button>
                    <button>Source Code</button>
                </div>
                <div className="col-3">
                    <h3>React Weather App</h3>
                    <h4>HTML,CSS,JS,& React</h4>
                    <img src={ReactWeatherApp} className="React Weather App" alt=""/>
                    <p>Weather app re-created utilising react. This project uses an api from SheCodes</p>
                    <a href="https://scintillating-gumption-2d9268.netlify.app/" target="_blank" rel="noreferrer" className="btn btn-light">Demo</a>
                    <a href="https://github.com/enigmajess/weather-react" target="_blank" rel="noreferrer" className="btn btn-light">Source Code</a>
                </div>
                <div className="col-3">
                    <h3>Landing Page</h3>
                    <h4>HTML & CSS</h4>
                    <img src={SourdoughLandingPage} className="SourdoughLandingPage" alt=""/>
                    <p>Vanilla landing page made purely with HTML & CSS. The page includes clickable links and alerts.</p>
                    <button>Demo</button>
                    <button>Source Code</button>
                </div>
                
            </div>
      </div>
    )
}

export default Projects;