import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Challah from "./images/Challah.jpg";
import Painting from "./images/Painting.jpg";
import WeddingBridge from "./images/WeddingBridge.jpg";
import WeddingLicense from "./images/WeddingLicense.jpg";


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
      <AliceCarousel autoPlay autoPlayInterval={1000}items={items} />
    );
  };
console.log(Gallery)
  return (
    <div>
    <h2>Highlights</h2>
      <Gallery />
    </div>
  );
}
