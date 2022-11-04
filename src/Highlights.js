import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Challah from "./images/Challah.jpg";
import Painting from "./images/Painting.jpg";
import WeddingBridge from "./images/WeddingBridge.jpg";
import WeddingLicense from "./images/WeddingLicense.jpg";
import "./Highlights.css";


export default function Highlights() {
  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <img
    src={Challah}
    onDragStart={handleDragStart}
    alt="challah"
  />,
    
    <img
      src={WeddingBridge}
      onDragStart={handleDragStart}
      alt="wedding bridge"
    />,
    <img
      src={WeddingLicense}
      onDragStart={handleDragStart}
      alt="wedding license"
    />,
    <img
      src={Painting}
      onDragStart={handleDragStart}
      alt="flower painting"
    />,
 
  ];

  const Gallery = () => {
    return (
      <AliceCarousel mouseTracking autoPlay autoPlayInterval={500} animationDuration={500} items={items} />
    );
  };
  return (
    <div className="Highlights">
    <h2>Highlights</h2>
      <Gallery />
    </div>
  );
}
