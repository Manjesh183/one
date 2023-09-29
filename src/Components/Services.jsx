import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../Assets/3 (1).jpg";
import img2 from "../Assets/4 (1).jpg";

const Services = () => {
  return (
    <div>
      <Carousel>
        <div>
          <img src={img1} alt="Item1" />
          <p className="legend">Full Stack</p> 
          {/* className="legend"makes text white  inside black bar */}
        </div>
        <div>
          <img src={img2} alt="Item2" />
          <p className="legend">Peer-to-peer Support</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;